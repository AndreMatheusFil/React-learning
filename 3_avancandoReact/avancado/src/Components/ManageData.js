import React from 'react'
import {useState} from 'react'


function ManageData() {

    let SomeDate = 10;

    console.log(SomeDate);

    const [Number,setNumber]= useState(10);

  return (
    <div>
        <div>
            <p>Valor: {SomeDate}</p>
            <button onClick={ () => (SomeDate = 15)}>Mudar Variavel</button>
        </div>
        <div>
            <p>Valor: {Number}</p>
            <button onClick={() => setNumber(25)}>Mudar Variavel</button>
        </div>
    </div>
  )
}

export default ManageData