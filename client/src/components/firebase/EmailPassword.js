import { firebase_app , firebase_auth , firebase_auth_email_provider } from './firebase-config';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword } from 'firebase/auth'

module.exports = 
{
    EmailPassword:
    {
        auth: async function( email, password )
        {
            if(email == "" || password == "") return false
            return await signInWithEmailAndPassword( firebase_auth , email , password )
                        .then((result) => {
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
            console.log("(First)")
            if(email == "" || password == "") return false
            console.log("(Second)")
            return await createUserWithEmailAndPassword( firebase_auth , email , password )
                        .then((result) => {
                            
                                                console.log("(Third)result = ",result)
                                                return true
                                          })
                        .catch((error) => {
                                                console.log("(Third)error = ",error)
                                                return false
                                          });
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

