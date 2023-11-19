import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function Authload({ navigation }){
  const auth=getAuth();
    onAuthStateChanged(auth,(user) => {
        if (user) {
          // User is logged in
          return(navigation.reset({
            index: 0,
            routes: [{ name: 'Dash' }],
          }))
        } else {
          // User is not logged in
          return(navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }))
        }
      })
}
