import React,{useState, useEffect} from 'react';

function BudgetComponent(props) {

    const [budget, setBudget] = useState(0);
    const [expense, setExpense]= useState(0);
    const [amtRemaining, setAmtRemaining]= useState(0);
   
    useEffect(()=> {
       setAmtRemaining(()=> budget-expense);},[expense]);
    

    return (
        <div>
            <h2>Expense Report</h2>
         <p> <label for="budget">Budget:</label>  
          <input type="number" id="budget" name="budget" value={budget} onChange={(e)=> setBudget(e.target.value)}></input><br></br></p>
        <p>  <label for="expenses">Expenses:</label>  
          <input type="number" id="expenses" name="expenses" value={expense} onChange={(e)=> setExpense(e.target.value)}></input><br></br></p>
        <p>  <label for="amtRemaining">Amount Remaining:</label>  
          <input type="number" id="amtRemaining" name="amtRemaining" value={amtRemaining}></input><br></br></p>
        </div>
    );
}

export default BudgetComponent;