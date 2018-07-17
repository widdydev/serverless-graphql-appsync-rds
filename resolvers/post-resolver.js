const connection = require('./../knexfile');
const knex = require('knex')(process.env.NODE_ENV === 'production' ? connection.production : connection.dev);

async function getPost(args) {
  try {
    const getPostQuery = knex('post')
      .where('id', args.id)
      .first();

    const result = await getPostQuery;

    return result
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getPosts(args) {
  try {
    const getPostsQuery = knex('post')
      .where('author_id', args.author)
      .orderBy('id', 'desc');

    const result = await getPostsQuery;

    return result
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function addPost(args) {
  try {
    const postAddInput = {
      text: args.input.text,
      author_id: parseInt(args.input.author)
    }

    await knex('post')
      .insert(postAddInput);

    return postAddInput;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updatePost(args) {
  try {
    const postUpdateInput = {
      text: args.input.text,
      author_id: parseInt(args.input.author)
    }
    
    if(!args.input.text)
      delete postUpdateInput.text;
    if(!args.input.author)
      delete postUpdateInput.author_id;

    await knex('post')
      .where('id', args.input.id)
      .update(postUpdateInput);

    return postUpdateInput;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deletePost(args) {
  try {
    const getPostQuery = knex('post')
      .where('id', args.id)
      .first();

    const result = await getPostQuery;

    if (result) {
       await knex('post')
        .where('id', args.id)
        .del();
    }

    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export { getPost, getPosts, addPost, updatePost, deletePost };