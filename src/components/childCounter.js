import React from 'react'
import { useDispatch } from 'react-redux'

const ChildCounter = () => {
    const dispatch =useDispatch()
    const handleDecrement=()=>{
        dispatch({
            type:"DECREEMENT_COUNT",
            payload:1
        })
    }
  return (

      <button onClick={handleDecrement}>-</button>

  )
}

export default ChildCounter
