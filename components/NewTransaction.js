import React,{ useState , useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewTransaction = () => {

    const [desctiption,setDescription] = useState();
    const [TransactionAmount,setTransactionAmount] = useState();

    const { NewTransactionFunction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransactionObj = {
            id: new Date().getTime(),
            desctiption,
            TransactionAmount: +TransactionAmount
        }

        NewTransactionFunction(newTransactionObj);
        
        setDescription("");
        setTransactionAmount("");
    }
    return (
        <div>
            <h3>Add New Transactipon <span className="ExpenseSpan"> ( Expense in Minus ) </span></h3>
           
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="txtDescription">
                        Description
                    </label>
                    <input type="text" id="txtDescription" placeholder="Detail for transaction" value={desctiption}  
                    onChange={(e)=> setDescription( e.target.value ) } required="required"></input>
                </div>
                <div className="form-control">
                    <label htmlFor="txtTransactionAmount">
                        Transaction Amount
                    </label>
                    <input type="number" id="txtTransactionAmount" placeholder="Enter Transaction Amount" value={TransactionAmount}
                    onChange={(e)=> setTransactionAmount( e.target.value ) } required="required"></input>
                </div>
                <button className="btn">
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
