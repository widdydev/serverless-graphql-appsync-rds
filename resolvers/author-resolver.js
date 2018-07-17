const connection = require('./../knexfile');
const knex = require('knex')(process.env.NODE_ENV === 'production' ? connection.production : connection.dev);

async function getAuthor(args) {
  try {
    const getAuthorQuery = knex('author')
      .where('id', args.id)
      .first();

    const result = await getAuthorQuery;

    return result
  } catch (err) {
    console.log(err);
  }
}

async function getAuthors(args) {
  try {
    const getAuthorsQuery = knex('author')
      .orderBy('lastname', 'asc');

    const result = await getAuthorsQuery;

    return result
  } catch (err) {
    console.log(err);
  }
}

export { getAuthor, getAuthors };