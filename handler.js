import { getAuthor, getAuthors } from './resolvers/author-resolver';
import { getPost, getPosts, addPost, updatePost, deletePost } from './resolvers/post-resolver';
import { getComment, getComments, addComment, updateComment, deleteComment } from './resolvers/comment-resolver';


exports.graphqlHandler = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log('Received event {}', JSON.stringify(event, 3));

  switch (event.field) {
    case 'getAuthor': {
      getAuthor(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'getAuthors': {
      getAuthors(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'getPost': {
      getPost(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'getPosts': {
      getPosts(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'getComment': {
      getComment(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'getComments': {
      getComments(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'addPost': {
      addPost(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'updatePost': {
      updatePost(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'deletePost': {
      deletePost(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'addComment': {
      addComment(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'updateComment': {
      updateComment(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'deleteComment': {
      deleteComment(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'comments': {
      getComments(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'author': {
      getAuthor(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    case 'posts': {
      getPosts(event.arguments).then(result => {
        callback(null, result);
      }).catch(error => {
        callback(error, null);
      });
      break;
    }
    default: {
      callback(`Unknown field, unable to resolve ${event.field}`, null);
      break;
    }
  }
};
