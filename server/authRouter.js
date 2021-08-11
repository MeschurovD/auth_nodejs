import Router from 'express'
import controller from './authController.js'

const router = new Router()

console.log('con', controller)
router.post('/registration',  controller.registration)
router.post('/login', controller.login)
router.get('/users', controller.getUsers)
router.get('/123', (req, res) => res.json('server work'))

export default router