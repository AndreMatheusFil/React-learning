import React from 'react'

function UserDetails({idade, nome, profissao}) {
  return (
    <div>
        <h1>{nome}</h1>
        <p>{profissao}</p>
        <p>{idade}</p>
        {idade >= 18 && <p> Já pode dirigir</p>}
    </div>
  )
}

export default UserDetails