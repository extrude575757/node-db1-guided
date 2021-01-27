const db = require('../../data/db-config.js')


module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

async function get() {
  // return Promise.resolve('get wired')
  const sql =  await db('posts').toSQL(); // or toString()

  const posts = await db('posts');
  return posts;
}

async function getById(id) {
  // return Promise.resolve('getById wired')
  const [post] = await db('posts').where({id});
  return post;
}

function create() {
  return Promise.resolve('create wired')
}

function update() {
  return Promise.resolve('update wired')
}

function remove() {
  return Promise.resolve('delete wired')
}
