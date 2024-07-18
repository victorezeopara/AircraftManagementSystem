import { Router } from 'express'
var router = Router()
import { getAuth, onAuthStateChanged } from 'firebase/auth'

/* GET users listing. */
router.use('/', async (req, res, next) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      const uid = user.uid
      console.log('your have been authenticated')

      res.render('search')
      // ...
    } else {
      // User is signed out
      console.log('you have to sign in')
      res.redirect('/index')
    }
  })
})

export default router
