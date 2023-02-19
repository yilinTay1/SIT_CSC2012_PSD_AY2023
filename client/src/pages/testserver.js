import React, { useRef , useEffect } from 'react'
import axios from 'axios'

export default function TestServer()
{
    const runOnce = useRef(true)
    const getData = async() => 
    {
        const data = {
                            id       : "test_id"  ,
                            password : "passworrd"
                     }
                     
        axios.post( 'http://localhost:5000/api/test', data )
            .then( response => {
                                    return response.data
                               })
            .then( response => {
                                    console.log(response)
                               })
            .catch( err => console.log(err) )
    }
    //--------------------------------------------------------------------------------------------------------------------
    useEffect(  () =>
    {
        if( runOnce.current )
        {
            runOnce.current = false
            getData()
        }
    },[runOnce])              
    //--------------------------------------------------------------------------------------------------------------------
    return(   
            <>
                <center>
                    <h2>This page is to test the server connection..</h2>
                </center>
            </>
          )
    //--------------------------------------------------------------------------------------------------------------------
}