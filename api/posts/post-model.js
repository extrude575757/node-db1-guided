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

async function create(data) {
  // return Promise.resolve('create wired')
  const [res] = await db('posts').insert(data);
  const post = await getById(res)
  return post;
}

async function update(id,changes) {
  // return Promise.resolve('update wired')
  const count = await db('posts').where({id}).update(changes);
  return count;
}

async function remove(id) {
  // return Promise.resolve('delete wired')

  const count = await db('posts').where({id}).del();
  return count;
}
