import React from 'react';
import './SummaryCard.css';

const SummaryCard = ({ title, value, icon, color }) => {
  return (
    <div className="new-summary-card">
      <div className="card-header">
        <div className="card-icon" style={{ backgroundColor: color || "#444" }}>
          {icon}
        </div>
        <span className="card-title">{title}</span>
      </div>
      <div className="card-value">{value}</div>
    </div>
  );
};

export default SummaryCard;