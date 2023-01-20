import React from 'react'
import { useState } from 'react'

function ListRender() {

    const [list]= useState(['André','Marcos','Gabriel','Lucas']);

    const [user,setUsers] = useState([
        {id:1,name:'André',age:24},
        {id:2, name:'Joana',age:34},
        {id: 3, name: 'Kaila',age:10}
    ])

    const DeleteRandowm = () => {
        const randomNumber = Math.floor(Math.random()*4);

        setUsers((prevUsers) =>{
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        }
        )
    };
  return (
    <div>
        <ul>
            {/* Não recomendado usar o i para a Key */}
            {list.map((item,i)=>
            (
                <li key={i}>
                    {item}
                </li>
            )
            )}
        </ul>
        <ul>
            {/* Recomendado para a Key, tentar sempre usar uma chave unica*/}
            {user.map((user)=>
            (
                <li key={user.id}>
                    {user.name} - {user.age}
                </li>
            )
            )}
            <button onClick={DeleteRandowm }>Deleta um randomico</button>
        </ul>
    </div>
  )
}

export default ListRender