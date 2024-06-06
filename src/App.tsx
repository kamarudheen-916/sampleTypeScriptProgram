import React, { useState, useEffect } from 'react';
import './App.css';
import { SavingsAccount } from './models/SavingsAccount';

const App: React.FC = () => {
    const [accountNumber, setAccountNumber] = useState<string>('');
    const [newAccountNumber, setNewAccountNumber] = useState<string>('');
    const [newDamount, setNewDAmount] = useState<string>('');
    const [Damount, setDAmount] = useState<string>('');
    const [Wamount, setWAmount] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [balance, setBalance] = useState<number | null>(null);
    const [savingsAccount] = useState(new SavingsAccount());

    const handleAddNewAccount = () => {
        const msg = savingsAccount.createNewAccount(newAccountNumber, Number(newDamount));
        setMessage(msg);
        alert(msg);
    }

    const getAccount = () => {
        const acc = savingsAccount.getAccount(accountNumber);
        if (acc) {
            setBalance(acc.amount);
        } else {
            setMessage('Account not found');
        }
    }

    const handleDeposit = () => {
        const acc = savingsAccount.deposit(Number(Damount), accountNumber);
        if (acc) {
            setBalance(acc.amount);
        } else {
            setMessage('Deposit failed');
        }
    };

    const handleWithdraw = () => {
        const acc = savingsAccount.withdraw(Number(Wamount), accountNumber);
        if (acc) {
            setBalance(acc.amount);
        } else {
            setMessage('Withdraw failed');
        }
    };

    useEffect(() => {
        if (message) {
            setTimeout(() => setMessage(''), 3000);
        }
    }, [message]);

    return (
        <div>
            <div className="heading">
                <h1>Your Bank</h1>
                <div className="container">
                    <h1>Create new account</h1>
                    <input
                        type="text"
                        placeholder="Account Number"
                        value={newAccountNumber}
                        onChange={(e) => setNewAccountNumber(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Amount"
                        value={newDamount}
                        onChange={(e) => setNewDAmount(e.target.value)}
                    />
                    <button onClick={handleAddNewAccount}>Submit</button>
                </div>
            </div>
            <div className="main">
                <div className="container">
                    <h1>Your Account Details</h1>
                    <input
                        type="text"
                        placeholder="Account Number"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                    <button onClick={getAccount}>Submit</button>
                    <h1>Your Balance is: {balance}</h1>
                </div>
                <div className="container">
                    <h1>Deposit</h1>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={Damount}
                        onChange={(e) => setDAmount(e.target.value)}
                    />
                    <button onClick={handleDeposit}>Deposit to Savings</button>
                </div>
                <div className="container">
                    <h1>Withdraw</h1>
                    <input
                        type="text"
                        placeholder="Amount"
                        value={Wamount}
                        onChange={(e) => setWAmount(e.target.value)}
                    />
                    <button onClick={handleWithdraw}>Withdraw from Savings</button>
                </div>
            </div>
            <div>
                <h1>{message}</h1>
            </div>
        </div>
    );
}

export default App;
