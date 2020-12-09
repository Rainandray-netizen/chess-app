import React, {useState} from 'react'

import {convertFEN} from '../../../gameStuff/notationConversion'
import Square from '../Square/Square'
import './board.css'

const Board = ({position}) => {
  console.log(convertFEN('rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'))

  const [boardState, setBoardState] = useState(position ? position: convertFEN())
  console.log({boardState})
  return (
    <article className='boardClass'>
      {boardState && boardState.boardPosition.map((row,rank)=>{
        return (<section className='rowClass'>
          {row.map((square,file)=>{
            return <Square piece={square} rank={rank+1} file={file+1}/>
          })}
        </section>)
      })}
    </article>
  )
}

export default Board