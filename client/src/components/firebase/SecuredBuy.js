import React, { useRef , useEffect }   from 'react'

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
                                if(sessionStorage.getItem('business'))
                                {
                                    window.location.href = '/business/dashboard';
                                }
                                else
                                {
                                    window.location.href = '/customer/login';
                                }
                            }
                        }
                    }, [runOnce])
    return(
            <></>
          )
}