const express = require('express')
const ContactRouter = express.Router()

ContactRouter.get('/',(request,response) => {
    response.send('Contact Page')
})

module.exports = ContactRouter