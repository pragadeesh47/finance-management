import React, { useState } from 'react';
import "./LoanDetails.css";

const customerData = [
  {
    customername: "John Doe",
    address: "123 Main St, NY",
    documenttype: "License",
    vehicleno: "ABC-123",
    amount: "200",
    date: "2025-07.24",
    phoneno: "123-456-7890",
    dueAmount: 50,
    dueLength: 12
  },
  {
    customername: "Jane Smith",
    address: "456 Park Ave, LA",
    documenttype: "ID Card",
    vehicleno: "XYZ-789",
    amount: "150",
    date: "2025-07.24",
    phoneno: "987-654-3210",
    dueAmount: 50,
    dueLength: 12
  }
];

const LoanDetails = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCustomers = customerData.filter(customer =>
    customer.customername.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="loan-details">
      <h1>Customer List</h1>

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by Customer Name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Address</th>
            <th>Document Type</th>
            <th>Vehicle No</th>
            <th>Phone No</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Due Amount</th>
            <th>Due Length</th>
          </tr>
        </thead>
        <tbody>
          {filteredCustomers.length > 0 ? (
            filteredCustomers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.customername}</td>
                <td>{customer.address}</td>
                <td>{customer.documenttype}</td>
                <td>{customer.vehicleno}</td>
                <td>{customer.phoneno}</td>
                <td>{customer.date}</td>
                <td>₹{customer.amount}</td>
                <td>₹{customer.dueAmount}</td>
                <td>{customer.dueLength}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="no-data">No matching customers found.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LoanDetails;
