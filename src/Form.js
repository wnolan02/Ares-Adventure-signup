import React, { useState } from 'react'
import './Form.css'
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess'

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm () {
    setIsSubmitted(true)
  }
  return (
    <>
    <h2>
      Ares Adventure Inc.
    </h2>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <video
            autoPlay
            loop
            muted
          >
            <source src='video/vid1.mp4' type='video/mp4' />
            {/* <h1>Explore</h1>
          <p>Adventure awaits.</p> */}
            {/* <img className='form-img' src='img/pic1.jpg' alt='nature' /> */}
          </video>
        </div>
        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  )
}

export default Form
