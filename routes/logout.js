import { Router } from 'express'
import { getAuth, signOut } from 'firebase/auth'

const router = new Router()

router.use('/', async (req, res, next) => {
  console.log('logout process')
  const auth = getAuth()
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      console.log('sign-out successful')
    })
    .catch((error) => {
      // An error happened.
      console.log('sign-out failed')
    })

  res.redirect('/index')
})

export default router
