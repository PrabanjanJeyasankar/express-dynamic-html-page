const express = require('express')
const AboutRouter = express.Router()

AboutRouter.get('/',(request,response) => {
    response.send('About Page')
})

module.exports = AboutRouter