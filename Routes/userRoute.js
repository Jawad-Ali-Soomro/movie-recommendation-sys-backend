const express = require('express')
const { createUser, getUsers } = require('../Controllers/userController')
const userRouter = express.Router()

userRouter.post('/create/user' , createUser)
userRouter.get('/get/all/users' , getUsers )

module.exports = userRouter