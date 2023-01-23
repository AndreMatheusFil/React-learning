
import React from 'react'
import './MyComponent.css'

function MyComponent() {
  const n = 9;
  const redTitle = false;
  return (
    <div>
        <h1>Este componente JSX</h1>
        <p>Paragrafo para fazamento do componente filho</p>
        <p className="my-comp-paragrafo">Como deve ser</p>
        <p style={{color: "Blue", backgroundColor: "Red"}}>Inline</p>
        <p style={n <10 ?({color: "yellow"}):({color: "red"})}>Inline dinamico</p>
        <h4 className={redTitle ? ("red-title"): ("blue-title")}>Classe dinamica</h4>
        <h1> teste </h1>
    </div>
  )
}

export default MyComponent