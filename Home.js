const express = require('express')
const HomeRouter = express.Router()

HomeRouter.get('/',(request,response) => {
    response.send('Home Page')
})

module.exports = HomeRouter