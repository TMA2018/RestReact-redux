import React from 'react';

const Counter = ({counter, inc, dec, rnd}) => {
    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} className="btn btn-primary"> - </button>
            <button onClick={inc} className="btn btn-primary"> + </button>
            <button onClick={rnd} className="btn btn-primary"> + Rnd </button>
        </div>
    );
}
export default Counter;