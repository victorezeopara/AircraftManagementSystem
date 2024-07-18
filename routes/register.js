import { auth } from '../../services/firebase-config'
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from 'firebase/auth'

// handleRegister
const register = async (name, email, password) => {
  try {
    await createUserWithEmailAndPassword(auth, email, password).catch((err) =>
      console.log(err),
    )
    await sendEmailVerification(auth.currentUser).catch((err) =>
      console.log(err),
    )
    await updateProfile(auth.currentUser, { displayName: name }).catch((err) =>
      console.log(err),
    )
  } catch (err) {
    console.log(err)
  }
}
