import React, { useRef , useEffect } from 'react'
import axios from 'axios'
import { firebase_app , firebase_fs }       from '../components/firebase/firebase-config';
import { Transactions }                     from '../components/firebase/Transactions'
import { collection , getDocs , doc , setDoc , addDoc } from 'firebase/firestore'
import { v4 as uuid } from 'uuid';


export default function TestServer()
{
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
                <center>
                    <h2>This page is to test the firebase database</h2>
                    <Transactions />
                </center>
            </>
          )
    //--------------------------------------------------------------------------------------------------------------------
}