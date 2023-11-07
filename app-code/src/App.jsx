import { useState } from 'react'
import './App.css'
import Signin from './Pages/Signin'
import { FormThemeProvider } from 'react-form-component'

function App() {

  return (
    <>

<FormThemeProvider theme={{ colors: { accent: '#00BCD4' } }}>
      <Signin />
</FormThemeProvider>

    
       
    </>
  )
}

export default App
