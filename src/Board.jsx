import { useState } from 'react'
import './App.css'
import Square from './Square.jsx'

export default function Board() {

  const [sign, setSign] = useState(true);
//   const [player, setPlayer] = useState('Player One');
  const [squares, setSquares] = useState(Array(9))

  function handleClick(i) {
    if (sign) {
        squares[i] = 'X'
    } else {
        squares[i] = 'O'
    }
    setSquares(squares)
    setSign(!sign)
    console.log('sign', sign)
    console.log('true', squares)
  }

  return (
    <>
        <div className='board'>
            <div className='row-one'>
        <Square squares={squares[0]} onClick={() => handleClick(0)}/>
        <Square squares={squares[1]} onClick={() => handleClick(1)}/>
        <Square squares={squares[2]} onClick={() => handleClick(2)}/>
            </div>
        <div className='row-two'>
        <Square squares={squares[3]} onClick={() => handleClick(3)}/>
        <Square squares={squares[4]} onClick={() => handleClick(4)}/>
        <Square squares={squares[5]} onClick={() => handleClick(5)}/>
        </div>
            <div className='row-three'>
        <Square squares={squares[6]} onClick={() => handleClick(6)}/>
        <Square squares={squares[7]} onClick={() => handleClick(7)}/>
        <Square squares={squares[8]} onClick={() => handleClick(8)}/>
                </div>
        </div>
        <div>{sign}'s turn</div>
    </>
  )
}