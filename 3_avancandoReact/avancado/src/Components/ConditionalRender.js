import React, { useState } from 'react'

function ConditionalRender() {
    const [x, setX] = useState(false);

    const [name] = useState('João')
  return (
    <div>Isso será exibido?
        {x && <p>Se x for true sim</p>}
        <button onClick={() => setX(!x)}>Inverte</button>
        {name === 'André'? (
            <div> 
                <p>Bem vindo {name}</p>
            </div>
            ):(
                <div>
                    <p>Bem vindo desconhecido</p>
                </div> 
            )}
    </div>
  )
}

export default ConditionalRender