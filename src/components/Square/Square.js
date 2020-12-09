import React from 'react'
import squareStyle from './square.css'
import squareColor from '../../../gameStuff/squareColor'

const Square = ({squre, rank, file}) => {
  
  return (
    <div style={{backgroundColor: squareColor(rank,file)}} className='square'>
    </div>
  )
}

export default Square