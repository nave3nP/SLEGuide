import { getAuth, onAuthStateChanged } from "firebase/auth";



export default function Authload({ navigation }){
  const auth=getAuth();
    onAuthStateChanged(auth,(user) => {
        if (user) {
              // User is logged in
          if (user.uid === 'CwLfHERMupZnUFt2S1BSd4wpDe62') {
            // User is the admin user, navigate to admin panel
            navigation.reset({
              index: 0,
              routes: [{ name: 'AdminPage' }], // Replace 'AdminPanel' with your admin panel route name
            });
          } else {
            // User is not the admin user, redirect to the regular dashboard or login
            navigation.reset({
              index: 0,
              routes: [{ name: 'Dashboard' }], // Replace 'Dash' with your regular dashboard route name
            });
          }
        } else {
          // User is not logged in
          return(navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
          }))
        }
      })
}
