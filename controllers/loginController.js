import { Router } from 'express'
let router = Router()

import {
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth'

const auth = getAuth()
setPersistence(auth, browserSessionPersistence)

router.use('/', async (req, res, next) => {
  console.log('the login controller is working')
  console.log('routing is working here')

  const { username, email, password } = req.body

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log('successfully signed in')
      res.redirect(`/homePage?username=${username}`)
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
      console.log('this is an error')
      res.render('error', { error: 'wrong email or password' })
    })
})
export default router
