import React, { useRef , useEffect } from 'react'

export default function TestServer()
{
    const runOnce = useRef(true)
    //--------------------------------------------------------------------------------------------------------------------
    useEffect(  () =>
    {
        if( runOnce.current )
        {
            runOnce.current = false
            const endpoint    = '/login'
            const credentials =     {
                                        'id'       : 'test_id',
                                        'password' : 'test_password'
                                    }
            const request_headers = {
                                        method     : 'POST',
                                        headers:{
                                                    'Content-Type' : 'application/json',
                                                },
                                        body       : JSON.stringify(credentials) 
                                    }
            fetch( endpoint , request_headers )
                .then(  response => response.json() )
                .then(  response => {
                                        const { id , password } = response
                                        console.log( response, id , password )
                                    } )
                .catch( err      => console.log( err) )
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