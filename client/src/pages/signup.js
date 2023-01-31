import '../config/firebase-config';
import { getAuth , createUserWithEmailAndPassword  } from 'firebase/auth'
import React, { useRef , useEffect }   from 'react'

export default function Signup()
{
    const auth     = getAuth();
    function signUpwithEmail()  {
                                    createUserWithEmailAndPassword( auth , "test@test.com" , "123456" )
                                    .then((userCredential) => {
                                                                    const user = userCredential.user;
                                                                    console.log(userCredential,user);
                                                            })
                                    .catch((error)         => {
                                                                    const errorCode    = error.code
                                                                    const errorMessage = error.message
                                                                    console.log(errorCode , errorMessage)
                                                            });
                                }


    return(   
        <>
            <div>
                <center>
                    <h2>Sign Up</h2>
                    <div>
                        <button onClick={signUpwithEmail}>Sign Up</button>
                    </div>
                </center>
            </div>
        </>
      )
}