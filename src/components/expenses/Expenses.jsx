import React, { useState } from 'react';
import './Expenses.css';

const Expenses = () => {
  const [formData, setFormData] = useState({
    date: '',
    title: '',
    amount: '',
    note: ''
  });

  const [expenses, setExpenses] = useState([]);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.amount) return;

    setExpenses(prev => [...prev, { ...formData }]);

    setFormData({
      date: '',
      title: '',
      amount: '',
      note: ''
    });
  };

  const totalAmount = expenses.reduce((sum, exp) => sum + parseFloat(exp.amount || 0), 0);

  return (
    <div className="expenses-page">
      <h1>Daily Expenses</h1>

      <form className="expense-form" onSubmit={handleAddExpense}>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="title"
          placeholder="Expense Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount (₹)"
          value={formData.amount}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="note"
          placeholder="Note (optional)"
          value={formData.note}
          onChange={handleChange}
        />
        <button type="submit">Add Expense</button>
      </form>

      <h2>Total Spent: ₹{totalAmount.toFixed(2)}</h2>

      <table className="expense-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Title</th>
            <th>Amount</th>
            <th>Note</th>
          </tr>
        </thead>
        <tbody>
          {expenses.length > 0 ? (
            expenses.map((exp, idx) => (
              <tr key={idx}>
                <td>{exp.date || '-'}</td>
                <td>{exp.title}</td>
                <td>₹{parseFloat(exp.amount).toFixed(2)}</td>
                <td>{exp.note || '-'}</td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="5" className="no-data">No expenses added.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Expenses;
