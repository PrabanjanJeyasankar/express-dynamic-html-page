const express = require('express')
const app = express()
const userRouter = require('./user.js')

app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response) => {
    response.send('Home Page')
})

app.use('/user', userRouter)

app.listen(3500)