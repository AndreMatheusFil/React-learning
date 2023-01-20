import React from 'react';
import MyComponent from './MyComponent';

//Comentario
const FirstComponent = () => {
    //Mais um comentario 
    /*
        Comentario de multiplas linhas 
    */
    return (
        <div>
            {/* Comentario  */}
            <h1>Meu primeiro componente</h1>
            <p className='Paragraf'> Meu Paragrafo do Componente </p>
            <MyComponent />
        </div>
    );
};

export default FirstComponent;