const connection = require('./../knexfile');
const knex = require('knex')(process.env.NODE_ENV === 'production' ? connection.production : connection.dev);

async function getComment(args) {
  try {
    const getCommentQuery = knex('comment')
      .where('id', args.id)
      .first();

    const result = await getCommentQuery;

    return result
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function getComments(args) {
  try {
    const getCommentsQuery = knex('comment')
      .where('post_id', args.post)
      .orderBy('id', 'desc');

    const result = await getCommentsQuery;

    return result
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function addComment(args) {
  try {
    const commentAddInput = {
      text: args.input.text,
      author_id: parseInt(args.input.author),
      post_id: parseInt(args.input.post)
    }

    await knex('comment')
      .insert(commentAddInput);

    return commentAddInput;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function updateComment(args) {
  try {
    const commentUpdateInput = {
      text: args.input.text,
      author_id: parseInt(args.input.author),
      post_id: parseInt(args.input.post)
    }

    if(!args.input.text)
      delete commentUpdateInput.text;
    if(!args.input.author)
      delete commentUpdateInput.author_id;
    if(!args.input.post)
      delete commentUpdateInput.post_id;

    await knex('comment')
      .where('id', args.input.id)
      .update(commentUpdateInput);

    return commentUpdateInput;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

async function deleteComment(args) {
  try {
    const getCommentQuery = knex('comment')
      .where('id', args.id)
      .first();

    const result = await getCommentQuery;

    if (result) {
      await knex('comment')
        .where('id', args.id)
        .del();
    }

    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export { getComment, getComments, addComment, updateComment, deleteComment };