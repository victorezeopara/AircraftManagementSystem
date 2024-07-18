import { Router } from 'express'
const router = new Router()

router.use('/', async (req, res, next) => {
  console.log('export payroll')
})

export default router
