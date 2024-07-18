import { Router } from 'express'
import { db } from './addUserController.js'
import { query, where, getDocs, collection, doc } from 'firebase/firestore'
import { parse } from 'url'

let router = Router()

let searchResults = []
let maintenanceData = []

router.use('/', async (req, res, next) => {
  const { query } = parse(req.url, true)

  //   console.log(query.aircraft_name)
  //   console.log(query.aircraft_number)

  const innerRef = doc(
    db,
    `asms`,
    `${query.aircraft_name} ${query.aircraft_number}`,
  )
  const collectionRef = collection(innerRef, 'maintenance_tasks')

  const getMaintenanceTasks = await getDocs(collectionRef).then(
    (querySnapshot) => {
      if (!querySnapshot.empty) {
        for (let i = 0; i < querySnapshot.docs.length; i++) {
          let user = querySnapshot.docs[i].data()

          searchResults.push(user)
        }
      } else {
        res.render('error', { message: 'no user found' })
      }

      res.render('info', {
        searchResults: searchResults,
      })
      searchResults = []
    },
  )
})

export default router
