import React, { useRef , useEffect }   from 'react'


export const Secured = ( { Component, pageProps } ) => 
(
  <>
    {
      useEffect(() => {
                          const token = sessionStorage.getItem('account');
                          if (token) {
                              console.log("I am authenticated!")
                          }
                          else
                          {
                              console.log("I am not authenticated!")
                              window.location.href = '/login';
                          }

                      }, [])
    }
  </>
)