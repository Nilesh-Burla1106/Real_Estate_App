import React, { useState } from 'react';
import '../css/CustomerData.css';

const CustomerData = () => {

  const [customer, setCustomer] = useState({
    serialNo: '',
    length: '',
    width: '',
    column: '',
    squareMetre: '',
    squareFeet: '',
    customerName: '',
    mobileNumber: '',
    bookingDate: '',
    area: ''
  });

  // Handler to update the form data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // Handler to submit the form
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Customer Data Submitted:', customer);
    alert('Customer data submitted successfully!');
  };

  return (
    <div className="customer-data-container">
      <h1>Customer Data Entry</h1>
      <form onSubmit={handleSubmit} className="customer-form">
        <div className="form-group">
          <label htmlFor="serialNo">Serial No:</label>
          <input
            type="text"
            id="serialNo"
            name="serialNo"
            value={customer.serialNo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="length">Length:</label>
          <input
            type="number"
            id="length"
            name="length"
            value={customer.length}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="width">Width:</label>
          <input
            type="number"
            id="width"
            name="width"
            value={customer.width}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="column">Column:</label>
          <input
            type="number"
            id="column"
            name="column"
            value={customer.column}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="squareMetre">Square Metre:</label>
          <input
            type="number"
            id="squareMetre"
            name="squareMetre"
            value={customer.squareMetre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="squareFeet">Square Feet:</label>
          <input
            type="number"
            id="squareFeet"
            name="squareFeet"
            value={customer.squareFeet}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="customerName">Customer Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={customer.customerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={customer.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bookingDate">Booking Date:</label>
          <input
            type="date"
            id="bookingDate"
            name="bookingDate"
            value={customer.bookingDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="area">Area:</label>
          <input
            type="text"
            id="area"
            name="area"
            value={customer.area}
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

export default CustomerData;
