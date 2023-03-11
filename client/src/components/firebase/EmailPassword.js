import { firebase_app , firebase_auth , firebase_auth_email_provider } from './firebase-config';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword , signOut } from 'firebase/auth'

module.exports = 
{
    EmailPassword:
    {
        auth: async function( email, password )
        {
            if(email == "" || password == "") return false
            return await signInWithEmailAndPassword( firebase_auth , email , password )
                        .then((result) => {
                                                sessionStorage.clear()
                                                sessionStorage.setItem("account", result.user.email)
                                                sessionStorage.setItem("uid"    , result.user.uid  )
                                                console.log(result)
                                                console.log("Authentication successful")
                                                return true
                                          })
                        .catch((error) => {
                                                console.log("Authentication failed",error)
                                                return false
                                          })
        },
        register: async function( email, password )
        {
            if(email == "" || password == "") return false

            return await createUserWithEmailAndPassword( firebase_auth , email , password )
                        .then((result) => {
                                                return true
                                          })
                        .catch((error) => {
                                                return false
                                          });
        },
        logOut: async function()
        {
            return await signOut( firebase_auth )
                            .then( (result)=>{ 
                                                sessionStorage.clear()
                                                console.log("Logout successful")
                                                return true 
                                            } )
                            .catch((error)=> {  
                                                console.log("Logout failed",error)
                                                return false
                                            } )
        }
    }, 

    Google: 
    {
        auth: function(  password )
        {
            console.log( "Google",  password)
        }
    },
}

