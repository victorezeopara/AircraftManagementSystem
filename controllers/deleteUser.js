import { Router } from 'express'

import {
  query,
  where,
  getDocs,
  collection,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { parse } from 'url'
import { ref, deleteObject } from 'firebase/storage'

import { db, storage, app } from './addUserController.js'

let router = Router()

router.use('/', async (req, res, next) => {
  const { query } = parse(req.url, true)

  console.log(query, '---------------->>>>>>>')

  const userRef = doc(
    db,
    `asms`,
    `${query.aircraft_name} ${query.aircraft_number}`,
  )

  const storageRef = ref(
    storage,
    `userImages/${query.aircraft_name}-${query.aircraft_number}.jpg`,
  )

  try {
    const res2 = await deleteDoc(userRef).then((res) => {})
    const res3 = await deleteObject(storageRef).then((res) => console.log(res))
  } catch (err) {
    // console.log(err)
  }

  res.redirect('/homePage')
})

export default router
