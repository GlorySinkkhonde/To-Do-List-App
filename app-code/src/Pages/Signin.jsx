import React from 'react'
import Form, {
    Input,
    Select,
    FormButton,
  } from 'react-form-component'
  import DoItRightHeader from '../Components/DoItRightHeader'
  import './Signin.css'

function Signin() {
  return (
    <div>

        <DoItRightHeader />

        <h1 className='signup__header'>Sign In</h1>

        <Form fields={['email', 'password', 'type']} className='wrapper'>

            <Input
                name='email'
                type='email'
                label='E-mail'
                style={{ 
                backgroundColor: '#D9D9D9',
                color: 'black',
                padding: '1rem',
                borderRadius: '5px'
                }}
                className='input__text'
            />
            <Input
                name='password'
                type='password'
                label='Password'
                style={{ 
                backgroundColor: '#D9D9D9',
                color: 'black',
                padding: '1rem',
                borderRadius: '5px'
                }}
                className='input__text'
            />
            
            <FormButton 
                className='custom__button'
                onClick={fields => console.log(fields)}
            >Sign in</FormButton>
        
        </Form>
    </div>
  )
}

export default Signin