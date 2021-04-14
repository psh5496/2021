import React, { useState } from 'react';

function Counter() {
    let [number, setNumber] = useState(0);
    let [account, setAccount] = useState(0);
    const price = 1000;

    const onIncrease = () => {
        setNumber(number + 1);
        setAccount(account + price);
    };

    const onDecrease = () => {
        if (number >= 1) {
            setNumber(number - 1);
            setAccount(account - price);
        }
    };

    return (
        <>
            <h1>수량 : {number}</h1>
            <h1>총액 : {account}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </>
    );
}

export default Counter;
