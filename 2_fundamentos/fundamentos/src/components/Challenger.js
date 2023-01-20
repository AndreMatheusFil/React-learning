import React from 'react';

const Challenger = () => {
    const a = 1;
    const b = 2;

    return(
        <div>
            <h1>{a}</h1>
            <h1>{b}</h1>
            <button onClick={() => console.log(a+b)}>Soma e aparece no console</button>
        </div>
    );
};

export default Challenger;


