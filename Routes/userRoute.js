const express = require('express')
const { createUser, getUsers, updateUser, deleteUser } = require('../Controllers/userController')
const userRouter = express.Router()

userRouter.post('/create/user' , createUser)
userRouter.get('/get/all/users' , getUsers )
userRouter.patch('/update/user/:id' , updateUser)
userRouter.delete('/delete/user/:id' , deleteUser)

module.exports = userRouter