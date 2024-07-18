import { Router } from 'express'
var router = Router()
import { parse } from 'url'


import { getAuth, onAuthStateChanged } from 'firebase/auth'

/* GET home page. */
router.use('/', function (req, res, next) {
  const { query } = parse(req.url, true)
  const auth = getAuth()

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      const uid = user.uid
      console.log('your have been authenticated')

      res.render('homePage', {
        title: 'imperiumPMS',
        username: query.username,
      })
      // ...
    } else {
      // User is signed out
      console.log('you have to sign in')
      res.redirect('/index')
    }
  })
})

export default router
