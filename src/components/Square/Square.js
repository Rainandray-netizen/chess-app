import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChessPawn, faChessRook, faChessKnight, faChessBishop, faChessQueen, faChessKing } from '@fortawesome/free-solid-svg-icons'
import './square.css'
import squareColor from '../../../gameStuff/squareColor'

const Square = ({piece, rank, file}) => {
  let faIcon
  console.log(piece)
  if(piece){
    switch(piece.toLowerCase()){
      case ('p'):
        faIcon = faChessPawn
        break
      case ('r'):
        faIcon = faChessRook
        break
      case ('n'):
        faIcon = faChessKnight
        break
      case ('b'):
        faIcon = faChessBishop
        break
      case ('q'):
        faIcon = faChessQueen
        break
      case ('k'):
        faIcon = faChessKing
        break
    }
    return(
      <div style={{backgroundColor: squareColor(rank,file)}} className='square'>
        <FontAwesomeIcon icon={faIcon} size='3x' color={piece.match(/[A-Z]/) ? '#FFFFFF' : '#000000'}/>
      </div>
    )
  }

  return (
    <div style={{backgroundColor: squareColor(rank,file)}} className='square'>
    </div>
  )
}

export default Square