import { useState } from 'react'
import './App.css'
import { FormThemeProvider } from 'react-form-component'
import Account from './Pages/Account'

function App() {

  return (
    <>

    <FormThemeProvider theme={{ colors: { accent: '#00BCD4' } }}>
          <Account />
    </FormThemeProvider>

    </>
  )
}

export default App
