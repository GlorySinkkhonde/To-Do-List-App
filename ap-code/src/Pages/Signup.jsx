import React from 'react'
import './Signup.css'
import ReactDOM from 'react-dom'
import Form, {
  Input,
  Select,
  FormButton,
} from 'react-form-component'
import DoItRightHeader from '../Components/DoItRightHeader'

function Signup() {
  return (
    <div>

      <DoItRightHeader />

      <h1 className='signup-header'>Sign Up</h1>

      <Form fields={['name', 'email', 'password', 'type']} className='wrapper'>

        <Input
          name='name'
          label='Name'
          style={{ 
            backgroundColor: '#D9D9D9',
            color: 'black',
            padding: '1rem',
            borderRadius: '5px',
          }}
          className='input-text'
        />
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
          className='input-text'
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
          className='input-text'
        />
        
        <FormButton 
            className='custom-button'
          onClick={fields => console.log(fields)}
        >Sign up</FormButton>
        
      </Form>

    </div>
  )
}

export default Signup