import { Router } from 'express'
import { db } from './addUserController.js'
import { query, where, getDocs, collection, doc } from 'firebase/firestore'

let router = Router()

let searchResults = []
let maintenanceData = []

router.use('/', async (req, res, next) => {
  console.log('---->> in the show all conttroller')
  const q = query(collection(db, 'asms'))
  const querySnapshot = await getDocs(q).then((querySnapshot) => {
    if (!querySnapshot.empty) {
      for (let i = 0; i < querySnapshot.docs.length; i++) {
        let user = querySnapshot.docs[i].data()

        searchResults.push(user)
      }
    } else {
      res.render('error', { message: 'no user found' })
    }

    res.render('searchResults', {
      searchResults: searchResults,
      maintenanceData: maintenanceData,
      totalSearches: searchResults.length,
    })
    searchResults = []
  })
})

export default router
