import admin from 'firebase-admin'
import { Router } from 'express'
let router = Router()

import { parse } from 'url'
import { getAuth, onAuthStateChanged } from 'firebase/auth'

router.use('/', async (req, res, next) => {
  const { query } = parse(req.url, true)

  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      const uid = user.uid
      console.log('your have been authenticated')

      console.log('add user')
      res.render('updateUser', { query: query })
      // ...
    } else {
      // User is signed out
      console.log('you have to sign in')
      res.redirect('/index')
    }
  })
})

export default router
