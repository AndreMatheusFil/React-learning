import React from 'react'
// import { useContext } from 'react'
import ChangeContext from '../components/ChangeContext'
// import {CounterContext} from '../context/CounterContext'
import { useCounterContext } from '../hooks/useCounterContext'

import { useTitleColorContext } from '../hooks/useTitleColorContext'

const Home = () => {
  //const {counter} = useContext(CounterContext)
  const{counter} = useCounterContext()
  const{color, dispatch} = useTitleColorContext();
  const setTitleColor =(color)=>{
    dispatch({type: color})
  }
  return (
    <div>
      <h1 style={{color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p> 
      <p>A cor no state é: {color}</p>
      <ChangeContext />
      <div>
        <button onClick={()=>setTitleColor("RED")}>VERMELHO</button>
        <button onClick={()=>setTitleColor("BLUE")}>AZUL</button>
        <button onClick={()=>setTitleColor("BLACK")}>PRETO</button>
        <button onClick={()=>setTitleColor("PURPLE")}>ROXO</button>
      </div>
    </div>
  )
}

export default Home