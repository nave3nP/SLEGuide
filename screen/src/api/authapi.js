import firebase from 'firebase/app'
import 'firebase/auth'
import { getAuth, signInWithEmailAndPassword, signOut,createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { Alert } from 'react-native';


export const logoutUser = () => {
  const auth=getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    error.message
  });
}

export const signUpUser = async ({email, password }) => {
  try {
    const user = await 
     createUserWithEmailAndPassword(getAuth(),email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const loginUser = async ({ email, password }) => {
  try {
    const user = await 
      signInWithEmailAndPassword(getAuth(), email, password)
    return { user }
  } catch (error) {
    return {
      error: error.message,
    }
  }
}

export const sendEmailWithPassword = async (email) => {
  try {
    await sendPasswordResetEmail(getAuth(),email)
    return (Alert.alert("Password reset mail sent"))
  } catch (error) {
    return {
      error: error.message,
    }
  }
}
