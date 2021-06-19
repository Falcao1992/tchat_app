const express = require('express');
const {User} = require('../models');
const router = express.Router();

router.get('/',  async (req,res) => {
    console.log("req", "req")
    let userData
    try {
        userData = await User.findAll()
        res.status(200).send(userData)
    } catch (e) {
        res.status(404).send( "error in request User")
    }
})

router.post('/',  async (req,res) => {
    const {name, lastname} = req.body
    console.log("reqbody", req.body)
    let newUser
    let usercreate
    try {
        await User.create({
            name,
            lastname
        })
        usercreate = await User.findOne({
            where: {
                name,
                lastname
            }
        });
        res.status(200).send({newId: usercreate.id})
    } catch (e) {
        console.log("error",e)
        res.status(405).send("error to create User")
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        await User.destroy({where: {id}})
        res.status(200).send(`l'utilisateur ${id} à bien été supprimé`)
    } catch (e) {
        res.status(401).send(`not authorized to deleted user ${id}`)
    }
})

module.exports = router;