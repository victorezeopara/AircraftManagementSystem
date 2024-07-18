import { Router } from 'express'
let router = Router()

import { db, storage, app } from './addUserController.js'
import {
  updateDoc,
  doc,
  increment,
  addDoc,
  collection,
  setDoc,
} from 'firebase/firestore'

import { ref, getDownloadURL } from 'firebase/storage'

router.use('/', async (req, res, next) => {
  console.log('update user here')
  let {
    aircraft_name,
    aircraft_number,
    flight_hours,
    landings,
    date,
    servicability,
    text_area,
    start_time,
    start_date,
    end_time,
    end_date,
    engineers_name,
  } = req.body

  aircraft_name = aircraft_name.trim().toLowerCase()

  const userRef = doc(db, 'asms', `${aircraft_name} ${aircraft_number}`)

  const innerRef = doc(db, `asms`, `${aircraft_name} ${aircraft_number}`)
  const collectionRef = collection(innerRef, 'maintenance_tasks')

  // send to file store
  const res2 = await updateDoc(userRef, {
    aircraft_name: aircraft_name,
    aircraft_number: aircraft_number,
    hours: flight_hours,
    landings: landings,
    servicability: servicability,
    date_of_commisioning: date,

    // net_pay: admin.firestore.FieldValue.increment(bonus),
  }).catch((err) => {
    console.log('no document found')
    res.render('error', { message: 'no document found' })
  })

  const nested = addDoc(collectionRef, {
    // file_number: file_number,
    description: text_area,
    start_time: start_time,
    start_date: start_date,
    end_time: end_time,
    end_date: end_date,
    engineers_name: engineers_name,
  })
    .catch((err) => {
      console.log(err)
    })
    .catch((err) => {
      console.log("couldn't add")
    })

  res.redirect('/homePage?username=admin')
})

export default router
