import { firebase_app , firebase_auth , firebase_auth_email_provider } from './firebase-config';
import { signInWithEmailAndPassword , createUserWithEmailAndPassword , signOut , currentUser , sendPasswordResetEmail , updatePassword } from 'firebase/auth'

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
                                                sessionStorage.setItem("email"  , firebase_auth.currentUser.email  )
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
        },
        forgotPassword: async function( email )
        {
            if( email && email != "" )
            {
                return await sendPasswordResetEmail( firebase_auth , email )
                                .then( (result)=>{
                                                    console.log("An email was sent to " , email ," with a link to reset password")
                                                    return true
                                                } )
                                .catch((error)=> {  
                                                    console.log("Logout failed",error)
                                                    return false
                                                } )
            }
            else
            {
                return false
            }
        },
        changePassword: async function( email, new_password )
        {
            const _user = firebase_auth.currentUser
            if( _user )
            {
                if( _user.email == email)
                {
                    return await updatePassword( _user, new_password )
                                    .then( (result)=>{
                                                        console.log("Password change successful")
                                                        return true
                                                    } )
                                    .catch((error)=> {  
                                                        console.log("Password change failed" , error)
                                                        return false
                                                    } )
                    return true
                }
                else
                {
                    return false
                }
            }
            else
            {
                return false
            }
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

