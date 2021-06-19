const express = require('express');
const {Message} = require('../models');
const router = express.Router();

router.get('/',  async (req,res) => {
    console.log("req", "req")
    let messageData
    try {
        messageData = await Message.findAll()
        res.status(200).send(messageData)
    } catch (e) {
        res.status(404).send( "error in request message")
    }
})

router.post('/',  async (req,res) => {
    const {content, UserId, ConversationId, author} = req.body
    let newMessage
    try {
        newMessage = await Message.create({
            content,
            UserId,
            ConversationId,
            author
        })
        res.status(200).send(newMessage)
    } catch (e) {
        res.status(405).send("error to create Message")
    }
})

router.delete('/:id', async (req, res) => {
    const {id} = req.params
    try {
        await Message.destroy({where: {id}})
        res.status(200).send(`le message ${id} à bien été supprimé`)
    } catch (e) {
        res.status(401).send(`not authorized to deleted message ${id}`)
    }
})

module.exports = router;