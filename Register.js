import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [user,setUser] = useState({
    name:'',
    email:'',
    password:''
  })
  const onChangeInput = e => {
    const {name,value} = e.target;
    setUser({...user,[name]:value})
  }

  const registerSubmit =async e => {
    e.preventDefault()
    try{
      await axios.post('/user/register',{...user})

      localStorage.setItem('firstregister',true)

      window.location.href = '/login'

    }
    catch(err){
        alert(err.response.data.msg)
    }
  }
  return (
    <div className='registerpage'>
    <form onSubmit={registerSubmit}>
    <input 
    type='name'
      name='name'
      required
      placeholder='Enter Your Name'
      value={user.name}
      onChange={onChangeInput}
    />
      <input 
        type='email'
        name='email'
        required
        placeholder='Enter Your Email'
        value={user.email}
        onChange={onChangeInput}

      />

<input 
        type='password'
        name='password'
        required
        placeholder='Enter Your password'
        value={user.password}
        onChange={onChangeInput}
      />

      <div className='row'>
        <button type='submit'>Register</button>
        <Link to='/login'>Already Have Account? Login Here</Link>
      </div>

      
    </form>

    </div>
  )
}

export default Register