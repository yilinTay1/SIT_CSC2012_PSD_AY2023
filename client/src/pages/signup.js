//import                                                    '../components/firebase-auth/firebase-config'
import { Secured }                                   from '../components/firebase-auth/Secured'
//import { getAuth , createUserWithEmailAndPassword  } from 'firebase/auth'


export default function Signup()
{
    // const auth     = getAuth();
    // function signUpwithEmail()  {
    //                                 createUserWithEmailAndPassword( auth , "test@test.com" , "123456" )
    //                                 .then((userCredential) => {
    //                                                                 const user = userCredential.user;
    //                                                                 console.log(userCredential,user);
    //                                                         })
    //                                 .catch((error)         => {
    //                                                                 const errorCode    = error.code
    //                                                                 const errorMessage = error.message
    //                                                                 console.log(errorCode , errorMessage)
    //                                                         });
    //                             }


    return(   
            <>
                <div>
                    <Secured/>
                    <div>
                        <center>
                            <h2>Sign Up</h2>
                        </center>
                    </div>
                </div>
            </>
        )
}