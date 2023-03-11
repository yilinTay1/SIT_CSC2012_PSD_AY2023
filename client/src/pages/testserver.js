import React, { useRef , useEffect , useState } from 'react'
import axios from 'axios'
import { firebase_app , firebase_fs }       from '../components/firebase/firebase-config';
import { Transactions }                     from '../components/firebase/Transactions'
import { collection , getDocs , doc , setDoc , addDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid';
import { SecuredBiz } from '../components/firebase/SecuredBiz'
import { SecuredBuy } from '../components/firebase/SecuredBuy'

const TestServer= () =>
{
    const [ bizUser , setBizUser ] = useState(false)
    const runOnce = useRef(true)
    //--------------------------------------------------------------------------------------------------------------------
    useEffect( () =>
    {
        if( runOnce.current )
        {
            runOnce.current = false 
            try
            {
                const uid = sessionStorage.getItem('uid')
                console.log('uid : ',uid)
                const biz = sessionStorage.getItem('business')
                if(biz) setBizUser(true)
            }
            catch(err)
            {
                console.log('Firebase error : ', err)
            }
        }
    },[runOnce])              
    //--------------------------------------------------------------------------------------------------------------------
    return(   
            <>
                {
                  bizUser &&
                    <center>
                        <h2>This page is to test the firebase database</h2>
                        <Transactions />
                        {/* test */}
                    </center>
                }
            </>
          )
    //--------------------------------------------------------------------------------------------------------------------
}

TestServer.getLayout = (pagecontent) => {

return(
    <>
        <SecuredBiz />
        { pagecontent }
    </>
)

};

export default TestServer;