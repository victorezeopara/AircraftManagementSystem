import { Router } from 'express'
import { db } from './addUserController.js'
import { query, where, getDocs, collection, doc } from 'firebase/firestore'

let router = Router()

let searchResults = []
let maintenanceData = []

router.use('/', async (req, res, next) => {
  let { search_key, search_by } = req.body
  search_key = search_key.trim().toLowerCase()

  const q = query(
    collection(db, 'asms'),
    where(`${search_by}`, 'in', [`${search_key}`]),
  )

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
      search_by: search_by,
      search_key: search_key,
    })
    searchResults = []
    maintenanceData = []
  })
})

export default router
