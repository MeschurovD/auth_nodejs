import User from './models/User.js'
import Role from './models/Role.js'
import bcrypt from 'bcryptjs'

const authController = {
  registration: async (req, res) => {
    try {
      const {username, password} = req.body
      const candidate = await User.findOne({username})
      if(candidate) {
        return res.status(400).json({message: 'Пользователь с таким именем уже существует'})
      }
      const hashPassword = bcrypt.hashSync(password, 7)
      const user = new User({username, password: hashPassword})
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Registration error'})
    }
  },

  login: async (req, res) => {
    try {

    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Login error'})
    }
  },

  getUsers: async (req, res) => {
    try {
      res.json('getUsers 1')
    } catch (e) {
      console.log(e)
    }
  }
}
export default authController