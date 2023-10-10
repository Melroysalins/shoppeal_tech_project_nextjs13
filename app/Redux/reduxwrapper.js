"use client"
import React from 'react'
import { Provider } from 'react-redux'
import { appstore } from './Store'

export const Reduxwrapper = ({children}) => {
  return (
    <Provider store={appstore}>
        {children}
    </Provider>
  )
}
