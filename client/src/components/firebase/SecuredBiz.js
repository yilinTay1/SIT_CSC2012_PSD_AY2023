import React, { useRef , useEffect }   from 'react'
import Router from 'next/router'

export const SecuredBiz = ( { Component, pageProps } ) => 
{
   const runOnce = useRef(true)
    useEffect(() => {
                        if( runOnce.current )
                        {
                            runOnce.current = false
                            const token    = sessionStorage.getItem('account');
                            const business = sessionStorage.getItem('business');
                            if (token && business) {
                                console.log("I am authenticated!")
                            }
                            else
                            {
                                console.log("I am not authenticated!")
                                var _redirect =  '/business/login'
                                if( sessionStorage.getItem('buyer') )
                                {
                                    _redirect  = '/customer/home'
                                }
                                Router
                                    .push(_redirect)
                                    .catch(console.error)
                            }
                        }
                    }, [runOnce])
    return(
            <></>
          )
}