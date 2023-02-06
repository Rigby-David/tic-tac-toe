import './App.css'

export default function Square({ squares, onClick }) {

  return (
    <button className='square' onClick={onClick}>{squares}</button>
  )
}