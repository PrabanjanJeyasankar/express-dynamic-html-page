const express = require('express')
const app = express()
const userRouter = require('./user.js')
const ContactRouter = require('./Contact.js')
const HomeRouter = require('./Home.js')
const AboutRouter = require('./About.js')



app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))

app.get('/',(request,response) => {
    response.send('Welcome to this Page')
})

app.use('/user', userRouter)
app.use('/contact', ContactRouter)
app.use('/home', HomeRouter)
app.use('/about', AboutRouter)



app.listen(3500)