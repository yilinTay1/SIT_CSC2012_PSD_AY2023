import '../config/firebase-config';
import { getAuth , EmailAuthProvider , signInWithEmailAndPassword } from 'firebase/auth'
import React, { useRef , useEffect }   from 'react'

export default function Auth()
{
    const provider = new EmailAuthProvider()
    const auth     = getAuth();
    function signInwithEmail() {
                                    signInWithEmailAndPassword( auth , "test@test.com" , "123456" )
                                                .then((result) => {
                                                                        console.log(result)
                                                                  })
                                                .catch((error) => {
                                                                        console.log(error)
                                                                  })
                               }

    return(   
        <>
            <div>
                <center>
                    <h2>Authentication</h2>
                    <div>
                        <button onClick={signInwithEmail}>Sign In</button>
                    </div>
                </center>
            </div>
        </>
      )
}