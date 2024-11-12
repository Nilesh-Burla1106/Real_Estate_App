import React, { useState } from 'react';
import '../css/NewClientForm.css'
const NewClientForm = () => {
  const [client, setClient] = useState({
    societyName: '',
    plotNumber: '',
    plotArea: '',
    registrationDate: '',
    purchaseType: '',
    clientName: '',
    spouseName: '',
    clientAddress: '',
    pinCode: '',
    birthDate: '',
    occupation: '',
    officeAddress: '',
    mobileNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Client Data Submitted:', client);
    alert('Client data submitted successfully!');
  };

  return (
    <div className="client-form-container">
      <h1>New Client Registration</h1>
      <form onSubmit={handleSubmit} className="client-form">
        <div className="form-group">
          <label htmlFor="societyName">Society Name:</label>
          <input
            type="text"
            id="societyName"
            name="societyName"
            value={client.societyName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plotNumber">Plot Number:</label>
          <input
            type="text"
            id="plotNumber"
            name="plotNumber"
            value={client.plotNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="plotArea">Plot Area:</label>
          <input
            type="text"
            id="plotArea"
            name="plotArea"
            value={client.plotArea}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="registrationDate">Registration Date:</label>
          <input
            type="date"
            id="registrationDate"
            name="registrationDate"
            value={client.registrationDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Purchase Type:</label>
          <div>
            <label>
              <input
                type="radio"
                name="purchaseType"
                value="Loan"
                checked={client.purchaseType === 'Loan'}
                onChange={handleChange}
                required
              />
              Loan
            </label>
            <label>
              <input
                type="radio"
                name="purchaseType"
                value="Self Payment"
                checked={client.purchaseType === 'Self Payment'}
                onChange={handleChange}
                required
              />
              Self Payment
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={client.clientName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="spouseName">Spouse Name:</label>
          <input
            type="text"
            id="spouseName"
            name="spouseName"
            value={client.spouseName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="clientAddress">Client Address:</label>
          <textarea
            id="clientAddress"
            name="clientAddress"
            value={client.clientAddress}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="pinCode">PIN Code:</label>
          <input
            type="text"
            id="pinCode"
            name="pinCode"
            value={client.pinCode}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="birthDate">Date of Birth:</label>
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={client.birthDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={client.occupation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="officeAddress">Office Address:</label>
          <textarea
            id="officeAddress"
            name="officeAddress"
            value={client.officeAddress}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="mobileNumber">Mobile Number:</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={client.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={client.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default NewClientForm;
