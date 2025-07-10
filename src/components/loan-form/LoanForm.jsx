import React from 'react';
import "./LoanForm.css";

const LoanForm = () => {
  return (
    <>
    <h1 className='title'>Customer Form</h1>
    <div className="customer-form">
      <form>
        <div className="form-group">
          <label htmlFor="customername" className="form-label">Customer Name</label>
          <input type="text" id="customername" name="customername" placeholder="Name" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <textarea id="address" name="address" placeholder="Address" className="form-textarea"></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="documenttype" className="form-label">Document Type</label>
          <input type="text" id="documenttype" name="documenttype" placeholder="Document Type" className="form-input" />
        </div>

        <div className="form-group">
          <label htmlFor="vehicleno" className="form-label">Vehicle No</label>
          <input type="text" id="vehicleno" name="vehicleno" placeholder="Vehicle No" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="phoneno" className="form-label">Phone No</label>
          <input type="text" id="phoneno" name="phoneno" placeholder="Phone No" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="amount" className="form-label">Amount</label>
          <input type="text" id="amount" name="amount" placeholder="Amount" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="dueamount" className="form-label">Due Amount</label>
          <input type="text" id="dueamount" name="dueamount" placeholder="Due Amount" className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="duelength" className="form-label">Due Length</label>
          <input type="text" id="duelength" name="duelength" placeholder="Due Length" className="form-input" />
        </div>
      
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </>
  );
};

export default LoanForm;
