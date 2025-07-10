import React from 'react';
import './Dashboard.css';
import SummaryCard from '../summary/SummaryCard';

const Dashboard = () => {
  const totalCustomers = 125;
  const totalLoanAmount = 750000;
  const amountReceived = 500000;
  const amountPending = 250000;
  const totalProfit = 150000;
  const totalExpenses = 30000;

  const rupee = (n) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(n);

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="summary-grid">
        <SummaryCard title="Customers" value={totalCustomers} icon="👥" color="#FFC107" />
        <SummaryCard title="Total Loan" value={rupee(totalLoanAmount)} icon="💰" color="#4CAF50" />
        <SummaryCard title="Received" value={rupee(amountReceived)} icon="✅" color="#2196F3" />
        <SummaryCard title="Pending" value={rupee(amountPending)} icon="⏳" color="#FF5722" />
        <SummaryCard title="Profit" value={rupee(totalProfit)} icon="📈" color="#9C27B0" />
        <SummaryCard title="Expenses" value={rupee(totalExpenses)} icon="📉" color="#F44336" />
      </div>
    </div>
  );
};

export default Dashboard;
