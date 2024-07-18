import { Router, json } from 'express'
import { initializeApp } from 'firebase/app'
import { app } from './firebase-config.js'
import { ref, getStorage, uploadBytes, getDownloadURL } from 'firebase/storage'
import { getFirestore, setDoc, doc } from 'firebase/firestore'
import multer, { memoryStorage } from 'multer'

let router = Router()

const db = getFirestore(app)
const storage = getStorage(app)
const upload = multer({ storage: memoryStorage() })

router.use('/', upload.single('upload'), async (req, res, next) => {
  // console.log(req.file)

  let {
    aircraft_name,
    aircraft_number,
    flight_hours,
    landings,
    date,
    servicability,
    upload,
  } = req.body

  aircraft_name = aircraft_name.trim().toLowerCase()

  // create the document
  const userRef = doc(db, 'asms', `${aircraft_name} ${aircraft_number}`)

  //send to storage
  const storageRef = ref(
    storage,
    `userImages/${aircraft_name}-${aircraft_number}.jpg`,
  )
  uploadBytes(storageRef, req.file.buffer).then((snapshot) => {
    console.log('------------------ --------- ---------')
    // console.log(snapshot)
    getDownloadURL(
      ref(storage, `userImages/${aircraft_name}-${aircraft_number}.jpg`),
    ).then((downloadURL) => {
      console.log(downloadURL)

      // send to fire store
      const res2 = setDoc(userRef, {
        aircraft_name: aircraft_name,
        aircraft_number: aircraft_number,
        hours: flight_hours,
        landings: landings,
        servicability: servicability,
        date_of_commisioning: date,
        imageUrl: downloadURL,
      })
    })
  })

  res.redirect('/add_user')
})

export { router as addUserController, db, storage, app }
