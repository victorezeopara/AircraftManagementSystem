import { Router } from 'express'
var router = Router()

/* GET users listing. */
router.use('/', async (req, res, next) => {
  console.log('this is the loging router')
  res.render('login')
})

export default router
