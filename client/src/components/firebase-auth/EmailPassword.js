import { firebase_app , firebase_auth , firebase_auth_email_provider } from './firebase-config';
import { signInWithEmailAndPassword }                                  from 'firebase/auth'

module.exports = 
{
    EmailPassword:
    {
        auth: function( email, password )
        {
            return signInWithEmailAndPassword( firebase_auth , email , password )
                        .then((result) => {
                                                
                                                return true
                                          })
                        .catch((error) => {
                                                return false
                                          })
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

