const express = require('express')
const userRouter = express.Router()

userRouter.get('/' , (request,response) => {
    response.send("User Page")
})

const ListOfServices = [
    {
        'name':'abcde',
        'cost': 5000,
        'duration':'2 months'
    },
    {
        'name':'qwerty',
        'cost': 6000,
        'duration':'3 months'
    },
    {
        'name':'zxcv',
        'cost': 7000,
        'duration':'4 months'
    },
    {
        'name':'qrstuv',
        'cost': 8000,
        'duration':'5 months'
    },
]

userRouter.get('/new', (request,response)=>{
    response.render('index')
})

userRouter.get('/:id([0-9]{1})' , (request,response) => {
    response.send (`${request.user.name} 
                    ${request.user.cost}
                   ${request.user.duration}`)
})

userRouter.post('/',(request,response)=>{
    console.log(request)
    ListOfServices.push({name:request.body.FirstName,
                        cost:request.body.ServiceCost,
                        duration:request.body.ServiceDuration})
    response.redirect(`user/${ListOfServices.length-1}`)
})


userRouter.param('id' , (request , response , next , id)=>{
    request.user = ListOfServices[id]
    next()
})

module.exports = userRouter