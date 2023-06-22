import React from 'react'
import { useDispatch } from 'react-redux'

const ParentCounter = () => {
    // "INCREEMENT_COUNT"
    const dispatch=useDispatch()
    const handleIncreement=()=>{
        dispatch({
            type:"INCREEMENT_COUNT",
            payload:1
        })
    }
  return (

      <button onClick={handleIncreement}>+</button>
  
  )
}

export default ParentCounter
