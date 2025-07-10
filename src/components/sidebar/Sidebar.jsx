import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="nav">
          <ul>
          <li>
              <NavLink to="/" activeclassname="active">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/pending-dues" activeclassname="active">Pending Dues</NavLink>
            </li>
            <li>
              <NavLink to="/expenses" activeclassname="active">Expenses</NavLink>
            </li>
            <li>
              <NavLink to="/loan-details" activeclassname="active">Loan Details</NavLink>
            </li>
            <li>
              <NavLink to="/loan-form" activeclassname="active">Loan Form</NavLink>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Backdrop only on small screens */}
      {isOpen && <div className="backdrop" onClick={onClose}></div>}
    </>
  );
};

export default Sidebar;
