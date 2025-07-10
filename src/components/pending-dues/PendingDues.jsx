import React, { useState } from 'react';
import './PendingDues.css';

const initialUsers = [
  {
    id: 1,
    customername: 'John Doe',
    dues: [
      { dueDate: '2025-05-05', dueAmount: 150, paid: false },
      { dueDate: '2025-06-05', dueAmount: 200, paid: false },
      { dueDate: '2025-07-05', dueAmount: 300, paid: false }
    ]
  },
  {
    id: 2,
    customername: 'Jane Smith',
    dues: [
      { dueDate: '2025-07-01', dueAmount: 500, paid: false }
    ]
  },
  {
    id: 3,
    customername: 'Alice Kumar',
    dues: [
      { dueDate: '2025-06-15', dueAmount: 1000, paid: false }
    ]
  }
];

// Tiered penalty rules
const getPenaltyRate = (amount) => {
  if (amount >= 1000) return 20;
  if (amount >= 500) return 15;
  if (amount >= 200) return 10;
  return 5;
};

const calculatePenalty = (dueAmount, dueDateStr) => {
  const dueDate = new Date(dueDateStr);
  const today = new Date();
  const diffTime = today - dueDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const rate = getPenaltyRate(dueAmount);
  return diffDays > 0 ? diffDays * rate : 0;
};

const formatMonthYear = (dateStr) => {
  const d = new Date(dateStr);
  return d.toLocaleString('default', { month: 'short', year: 'numeric' }); // May 2025
};

const PendingDues = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState('');

  const calculateUserTotalDue = (dues) =>
    dues.reduce((sum, d) => {
      if (d.paid) return sum;
      const penalty = calculatePenalty(d.dueAmount, d.dueDate);
      return sum + d.dueAmount + penalty;
    }, 0);

  const handlePayAll = (userId) => {
    setUsers(prev =>
      prev.map(user =>
        user.id === userId
          ? { ...user, dues: user.dues.map(d => ({ ...d, paid: true })) }
          : user
      )
    );
  };

  const handlePartialPay = (userId) => {
    setUsers(prev =>
      prev.map(user => {
        if (user.id === userId) {
          const firstUnpaidIndex = user.dues.findIndex(d => !d.paid);
          if (firstUnpaidIndex !== -1) {
            const updatedDues = [...user.dues];
            updatedDues[firstUnpaidIndex].paid = true;
            return { ...user, dues: updatedDues };
          }
        }
        return user;
      })
    );
  };

  const filteredUsers = users.filter(user =>
    user.customername.toLowerCase().includes(search.toLowerCase()) &&
    user.dues.some(d => !d.paid)
  );

  return (
    <div className="pending-page">
      <h1>All Pending Dues</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <table className="pending-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Due Count</th>
            <th>Pending From → To</th>
            <th>Total Due (with Penalty)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => {
              const pendingDues = user.dues.filter(d => !d.paid);
              const totalDue = calculateUserTotalDue(user.dues);
              const fromMonth = formatMonthYear(pendingDues[0]?.dueDate);
              const toMonth = formatMonthYear(pendingDues[pendingDues.length - 1]?.dueDate);

              return (
                <tr key={user.id}>
                  <td>{user.customername}</td>
                  <td>{pendingDues.length}</td>
                  <td>{fromMonth} → {toMonth}</td>
                  <td>₹{totalDue.toLocaleString()}</td>
                  <td style={{ display: 'flex', gap: '8px' }}>
                    <button className="pay-button" onClick={() => handlePartialPay(user.id)}>
                      Partial Pay
                    </button>
                    <button className="pay-button" onClick={() => handlePayAll(user.id)}>
                      Mark All Paid
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <tr>
              <td colSpan="5" className="no-data">No pending dues found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default PendingDues;
