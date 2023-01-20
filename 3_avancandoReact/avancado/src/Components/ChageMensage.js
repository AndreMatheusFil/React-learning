import React from 'react'

function ChageMensage({handleMensagemState}) {
    const message = ['Oi', 'Olá', 'Oi, tudo bem?']
  return (
    <div>
        <button onClick={() => handleMensagemState(message[0])}>1</button>
        <button onClick={() => handleMensagemState(message[1])}>2</button>
        <button onClick={() => handleMensagemState(message[2])}>3</button>
    </div>
  )
}

export default ChageMensage