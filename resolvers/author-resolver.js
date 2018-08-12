async function getAuthor(knex, args) {
  return await knex('author')
    .where('id', args.id)
    .first();
}

async function getAuthors(knex, args) {
  return await knex('author')
    .orderBy('lastname', 'asc');
}

export { getAuthor, getAuthors };