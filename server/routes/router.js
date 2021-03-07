const express = require('express')
const router = new express.Router()
const services = require('../services/render')
const controller = require('../controller/controller')

router.get('/',services.anyName)

router.get('/add_user',services.add_user)

router.get('/update_user',services.update_user)

//API
router.post('/api/users', controller.createUser)
router.get('/api/users', controller.findUser)
router.put('/api/users/:id', controller.updateUser)
router.delete('/api/users/:id', controller.deleteUser)





module.exports = router