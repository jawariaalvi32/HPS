const express = require('express')
const Register = require('../../models/Register')
const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const register = await Register.find();
        console.log(register);
        res.status(200).json({ success: true, data: register });
      } 
      catch (e) {
        res.status(404).json({ success: false, error: e.message });
      }
    });

router.post('/add', async (req, res) => {
    console.log(".......", req.body)
    try {
        const register = await Register.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: register._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error : error.message
            
        })

    }


})

router.delete('/:id', async (req, res) => {
    try {
         const post = await Register.findByIdAndDelete(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        msg: 'post is deleted successfully'
    })
    } catch (error) {
        console.log(error)
    }

})

router.get('/:id', async (req, res) => {
    const register = await Register.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: register
    })

})
// router.put('/:id', async (req, res) => {
//     try {
//         const post = await Post.findByIdAndUpdate(req.params.id, { title: req.body.title, description: req.body.des});
//    res.json({
//        success: true,
//        status: 200, //ok
//        msg: 'post is updated successfully'
//    })
  
//    } catch (error) {
//        console.log(error)
//    }

// })

module.exports = router