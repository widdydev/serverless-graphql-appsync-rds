async function getPost(knex, args) {
  return await knex('post')
    .where('id', args.id)
    .first();
}

async function getPosts(knex, args) {
  return await knex('post')
    .where('author_id', args.author)
    .orderBy('id', 'desc');
}

async function addPost(knex, args) {
  const postAddInput = {
    text: args.input.text,
    author_id: parseInt(args.input.author)
  }

  await knex('post')
    .insert(postAddInput);

  return Promise.resolve(postAddInput);
}

async function updatePost(knex, args) {
  const postUpdateInput = {
    text: args.input.text,
    author_id: parseInt(args.input.author)
  }

  if (!args.input.text)
    delete postUpdateInput.text;
  if (!args.input.author)
    delete postUpdateInput.author_id;

  await knex('post')
    .where('id', args.input.id)
    .update(postUpdateInput);

  return Promise.resolve(postUpdateInput);
}

async function deletePost(knex, args) {
  const getPostQuery = knex('post')
    .where('id', args.id)
    .first();

  const result = await getPostQuery;

  if (result) {
    await knex('post')
      .where('id', args.id)
      .del();
  }

  return Promise.resolve(result);
}

export { getPost, getPosts, addPost, updatePost, deletePost };