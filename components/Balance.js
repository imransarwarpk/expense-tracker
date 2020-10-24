import React , { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {

    const { transactions }  = useContext(GlobalContext) ;

    const transactionsAmount = transactions.map(tran => tran.TransactionAmount);

    const balance = transactionsAmount.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div>
            <h4>Current Balance</h4>
            <h1>{balance}</h1>
        </div>
    )
}
