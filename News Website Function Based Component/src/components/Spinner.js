import React from 'react'
import PropTypes from 'prop-types'
import Snake from '../Snake.gif'
const Spinner=()=>{

 
    return (
      <div className='text-center'>
        <img className="my-3"src={Snake} alt="Loading" />
      </div>
    )
  }


export default Spinner
