import React from 'react';

const Events = () => {
    const handleMyFirstEvent = (e) => {
        console.log(e);
    };
    const renderSomething = (x) =>{
        if (x){
            return(
                <h1>Renderizando com true</h1>
            );
        }
        else{
            return(
                <h1>Renderizando false</h1>
            );
        }
    };
    return (
        <div>
            <div>
                <button onClick={handleMyFirstEvent}>Clique aqui 1</button>
            </div>
            <div>
            <button onClick={() => console.log("Clicou!")}>Clique aqui 2</button>
            </div>
            <div>
                {renderSomething(true)}
                {renderSomething(false)}
            </div>
        </div>
    );
};

export default Events;