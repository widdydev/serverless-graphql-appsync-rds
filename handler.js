import { getAuthor, getAuthors } from './resolvers/author-resolver';
import { getPost, getPosts, addPost, updatePost, deletePost } from './resolvers/post-resolver';
import { getComment, getComments, addComment, updateComment, deleteComment } from './resolvers/comment-resolver';

const connection = require('./knexfile');
const knexLib = require('knex');

exports.graphqlHandler = async (event, context) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('Received event {}', JSON.stringify(event, 3));

  const knex = knexLib(process.env.NODE_ENV === 'production' ? connection.production : connection.dev);

  try {
    let result;

    switch (event.field) {
      case 'author':
      case 'getAuthor': {
        result = await getAuthor(knex, event.arguments);
        break;
      }
      case 'getAuthors': {
        result = await getAuthors(knex, event.arguments);
        break;
      }
      case 'getPost': {
        result = await getPost(knex, event.arguments);
        break;
      }
      case 'posts':
      case 'getPosts': {
        result = await getPosts(knex, event.arguments);
        break;
      }
      case 'getComment': {
        result = await getComment(knex, event.arguments);
        break;
      }
      case 'comments':
      case 'getComments': {
        result = await getComments(knex, event.arguments);
        break;
      }
      case 'addPost': {
        result = await addPost(knex, event.arguments);
        break;
      }
      case 'updatePost': {
        result = await updatePost(knex, event.arguments);
        break;
      }
      case 'deletePost': {
        result = await deletePost(knex, event.arguments);
        break;
      }
      case 'addComment': {
        result = await addComment(knex, event.arguments);
        break;
      }
      case 'updateComment': {
        result = await updateComment(knex, event.arguments);
        break;
      }
      case 'deleteComment': {
        result = await deleteComment(knex, event.arguments);
        break;
      }
      default: {
        throw `Unknown field, unable to resolve ${event.field}`;
      }
    }
    return result;
  } catch (error) {
    console.log('Lambda error:', error);
    return Promise.reject(error);
  } finally {
    knex.destroy();
  }
};
