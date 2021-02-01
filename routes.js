const express = require('express')
const router = express.Router()
const person = require('./Person')


router.get('/', async(req,res) => {
    try{
           const persons = await person.find()
           res.json(persons)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', async(req,res) => {
    try{
           const result = await person.findById(req.params.id)
           res.json(result)
    }catch(err){
        res.send('Error ' + err)
    }
})


router.post('/', async(req,res) => {
    const person1 = new person({
        name: req.body.name
    })

    try{
        const a1 =  await person1.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})



module.exports = router