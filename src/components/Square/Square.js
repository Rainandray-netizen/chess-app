import React from 'react'
import squareStyle from './square.css'
import squareColor from '../../../gameStuff/squareColor'

const Square = ({piece, rank, file}) => {
  
  return (
    <div style={{backgroundColor: squareColor(rank,file)}} className='square'>
      {piece ? piece : null}
    </div>
  )
}

export default Square