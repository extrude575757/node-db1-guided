const express = require('express')
const Post = require('./post-model')

const router = express.Router()

// router.get('/', async (req, res, next) => {
//   try {
//     const data = await Post.get()
//     res.json(data)
//   } catch (err) {
//     next(err)
//   }
// })

router.get('/', async (req, res, next) => {
<<<<<<< HEAD
  try {
    const data = await Post.get()
    res.status(200).json(data)
  } catch (err) {
    next(err)
  }
=======
  Post.get()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      next(err)
    })
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
})

router.get('/:id', checkId, async (req, res, next) => {
  try {
<<<<<<< HEAD
    // const data = await Post.getById()
    // res.json(data)
    res.status(200).json(req.post)
=======
    const data = await Post.getById(req.params.id)
    res.json(data)
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
  } catch (err) {
    next(err)
  }
})

router.post('/', checkPayload, async (req, res, next) => {
  
  const body = req.body;
  try {
<<<<<<< HEAD
    const data = await Post.create(body)
=======
    const data = await Post.create(req.body)
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
    res.json(data)
  } catch (err) {
    next(err)
  }
})

<<<<<<< HEAD
router.put('/:id', checkId, checkPayload,async (req, res,next ) => {
  
  const {id} = req.params;
  const changes = req.body;
=======
router.put('/:id', checkId, checkPayload, async (req, res, next) => {
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
  try {
    // const data = await Post.update()
    // res.json(data)
    const data = await Post.update(id,changes)
    res.json(data);
  } catch (err) {
    next(err)
  }
})

router.delete('/:id', checkId, async (req, res, next) => {
<<<<<<< HEAD
  const {id} = req.params;
  
=======
>>>>>>> fba04228007010d7dcd7c22ca6c40c7b6b8c42dc
  try {
    const data = await Post.remove(id)
    res.json({count:data})
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
  const body = req.body;
  if(!body.title || !body.contents){
    const err = new Error('body must include title and contents')
    err.statusCode = 400;
    next(err);
  }else{
    next()
  }
}

module.exports = router
