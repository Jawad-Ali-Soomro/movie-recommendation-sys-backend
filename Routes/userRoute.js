const express = require('express')
const { createUser, getUsers, updateUser, deleteUser, getUserById } = require('../Controllers/userController')
const userRouter = express.Router()

userRouter.post('/create/user' , createUser)
userRouter.get('/get/all/users' , getUsers )
userRouter.get('/get/user/:id' , getUserById )
userRouter.patch('/update/user/:id' , updateUser)
userRouter.delete('/delete/user/:id' , deleteUser)

module.exports = userRouter