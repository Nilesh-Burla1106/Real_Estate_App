import React, { useState } from 'react';
import '../css/Accountant.css'

const Accountant = () => {
  // State to hold the form data
  const [transaction, setTransaction] = useState({
    date: '',
    type: '',
    amount: '',
    description: ''
  });

  // Handler to update the form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTransaction((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add logic here to save the data, like sending it to an API or storing it locally.
    console.log('Transaction Submitted:', transaction);
    alert('Transaction Submitted!');
  };

  return (
    <div className="accountant-container">
      <h1>Daily Account Entry</h1>
      <form onSubmit={handleSubmit} className="account-form">
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={transaction.date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="type">Transaction Type:</label>
          <select
            id="type"
            name="type"
            value={transaction.type}
            onChange={handleChange}
            required
          >
            <option value="">Select Type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            name="description"
            value={transaction.description}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Accountant;
