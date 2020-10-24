import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState';


export const Transaction = ( { transaction }) => {

    const { delTransactionFunction } = useContext(GlobalContext);

    const TransactionType = transaction.TransactionAmount > 0 ? 'plus' : 'minus';
    
    return (
        <li className={TransactionType}> { transaction.desctiption } <span> { transaction.TransactionAmount } </span> 
        <button className="delete-btn" onClick={() => delTransactionFunction(transaction.id)}>X</button>
        </li>
    )
}
