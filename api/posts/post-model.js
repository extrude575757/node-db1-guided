<<<<<<< HEAD
const db = require('../../data/db-config.js')

=======
const db = require('../../data/db-config')
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc

module.exports = {
  get,
  getById,
  create,
  update,
  remove,
}

<<<<<<< HEAD
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
=======
function get() {
  // SELECT * FROM posts;
  // return db('posts')
  // SELECT id, title, contents FROM posts;
  return db()
    .from('posts')
    .select('id as post_id', 'title', 'contents')
}

function getById(id) {
  // SELECT * FROM posts WHERE id = 1;
  // return db('posts').where({ id, bar: 'bar' })
  return db('posts').where('id', id).first()
}

function create(post) {
  // INSERT INTO posts (title, contents) VALUES ('foo', 'bar');
  return db('posts').insert(post)
    .then(([id]) => {
      return getById(id)
    })
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
}


function updateThen(id,changes){
  db('posts').where({id}).update(changes)
    .then((count) =>{
      return count
    })
    .catch(er =>{
      throw er;
    })
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
