import React, { useRef , useEffect }   from 'react'

export const Secured = ( { Component, pageProps } ) => 
{
   const runOnce = useRef(true)
    useEffect(() => {
                        if( runOnce.current )
                        {
                            runOnce.current = false
                            const token = sessionStorage.getItem('account');
                            if (token) {
                                console.log("I am authenticated!")
                            }
                            else
                            {
                                console.log("I am not authenticated!")
                                window.location.href = '/login';
                            }
                        }
                    }, [runOnce])
    return(
            <></>
          )
}