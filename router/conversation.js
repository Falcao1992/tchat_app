const express = require('express');
const {Conversation} = require('../models');
const router = express.Router();

router.get('/',  async (req,res) => {
    console.log("req", "req")
    let conversationData
    try {
        conversationData = await Conversation.findAll()
        res.status(200).send(conversationData)
    } catch (e) {
        res.status(404).send( "error in request conversation")
    }
})

router.post('/',  async (req,res) => {
    const {name} = req.body
    let newConversation
    try {
        newConversation = await Conversation.create({
            name
        })
        res.status(200).send(newConversation)
    } catch (e) {
        res.status(405).send("error to create Conversation")
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        await Conversation.destroy({where: {id}})
        res.status(200).send(`la conversation ${id} à bien été supprimé`)
    } catch (e) {
        res.status(401).send(`not authorized to deleted conversation ${id}`)
    }
})

module.exports = router;