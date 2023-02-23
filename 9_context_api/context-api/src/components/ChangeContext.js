import React from 'react'
//import { useContext } from 'react'
//import { CounterContext } from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'

const ChangeContext = () => {
    //const {counter,setCounter} = useContext(CounterContext)
    const {counter,setCounter} = useCounterContext()
  return (
    <>
    <button onClick={()=>setCounter(counter+1)}>Adiciona um ao valor</button>
    </>
  )
}

export default ChangeContext