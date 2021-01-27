const express = require('express')
const Post = require('./post-model')

const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const data = await Post.get()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
    // const data = await Post.getById()
    // res.json(data)
    res.status(200).json(req.post)
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  try {
    const data = await Post.create()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.put('/:id', checkId, async (req, res,next ) => {
  try {
    const data = await Post.update()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, checkPayload, async (req, res, next) => {
  try {
    const data = await Post.remove()
    res.json(data)
  } catch (err) {
    next(err)
  }
})

router.use((err, req, res, next) => {
  err.statusCode = err.statusCode ? err.statusCode : 500;
  res.status(500).json({ message: err.message, stack: err.stack })
})

async function checkId(req, res, next) {
  const {id} = req.params;
  try{
    const post = await Post.getById(id);
    if(post) {
      req.post = post;
      next();
    }else{
      const err = new Error('invalid id');
      err.statusCode = 404;
      next(err);
    }
   
  }
  catch(er){
    err.statusCode = 500;
    err.message = 'error retriving post';
    next(er);
  }
}

function checkPayload(req, res, next) {
  next()
}

module.exports = router
