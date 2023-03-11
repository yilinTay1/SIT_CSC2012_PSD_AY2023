import React, { useRef , useEffect }   from 'react'
import Router from 'next/router'

export const SecuredBuy = ( { Component, pageProps } ) => 
{
   const runOnce = useRef(true)
    useEffect(() => {
                        if( runOnce.current )
                        {
                            runOnce.current = false
                            const token    = sessionStorage.getItem('account');
                            const buyer    = sessionStorage.getItem('buyer');
                            if (token && buyer) {
                                console.log("I am authenticated!")
                            }
                            else
                            {
                                console.log("I am not authenticated!")
                                var _redirect = '/customer/login';
                                if(sessionStorage.getItem('business'))
                                {
                                    _redirect= '/business/dashboard'
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