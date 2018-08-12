async function getComment(knex, args) {
  return await knex('comment')
    .where('id', args.id)
    .first();
}

async function getComments(knex, args) {
  return await knex('comment')
    .where('post_id', args.post)
    .orderBy('id', 'desc');
}

async function addComment(knex, args) {
  const commentAddInput = {
    text: args.input.text,
    author_id: parseInt(args.input.author),
    post_id: parseInt(args.input.post)
  }

  await knex('comment')
    .insert(commentAddInput);

  return Promise.resolve(commentAddInput);
}

async function updateComment(knex, args) {
  const commentUpdateInput = {
    text: args.input.text,
    author_id: parseInt(args.input.author),
    post_id: parseInt(args.input.post)
  }

  if (!args.input.text)
    delete commentUpdateInput.text;
  if (!args.input.author)
    delete commentUpdateInput.author_id;
  if (!args.input.post)
    delete commentUpdateInput.post_id;

  await knex('comment')
    .where('id', args.input.id)
    .update(commentUpdateInput);

  return Promise.resolve(commentUpdateInput);
}

async function deleteComment(knex, args) {
  const getCommentQuery = knex('comment')
    .where('id', args.id)
    .first();

  const result = await getCommentQuery;

  if (result) {
    await knex('comment')
      .where('id', args.id)
      .del();
  }

  return Promise.resolve(result);
}

export { getComment, getComments, addComment, updateComment, deleteComment };