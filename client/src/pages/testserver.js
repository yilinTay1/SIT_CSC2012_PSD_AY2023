import React, { useRef , useEffect } from 'react'
import axios from 'axios'
import { Transactions } from '../components/firebase/Transactions'

export default function TestServer()
{
    const runOnce = useRef(true)
    //--------------------------------------------------------------------------------------------------------------------
    useEffect( () =>
    {
        if( runOnce.current )
        {
            runOnce.current = false           
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