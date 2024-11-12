import React, { useState } from 'react';
import '../css/SiteVisit.css'

const SiteVisit = () => {
  const [visitData, setVisitData] = useState({
    clientName: '',
    mobileNumber: '',
    visitDate: '',
    visitOutcome: '',
    comments: '',
    followUpDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisitData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Site Visit Data Submitted:', visitData);
    alert('Site visit data submitted successfully!');
  };

  return (
    <div className="site-visit-form-container">
      <h1>Site Visit Record</h1>
      <form onSubmit={handleSubmit} className="site-visit-form">
        <div className="form-group">
          <label htmlFor="clientName">Client Name:</label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            value={visitData.clientName}
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
            value={visitData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitDate">Visit Date:</label>
          <input
            type="date"
            id="visitDate"
            name="visitDate"
            value={visitData.visitDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="visitOutcome">Visit Outcome:</label>
          <select
            id="visitOutcome"
            name="visitOutcome"
            value={visitData.visitOutcome}
            onChange={handleChange}
            required
          >
            <option value="">Select Outcome</option>
            <option value="Interested">Interested</option>
            <option value="Needs Follow-up">Needs Follow-up</option>
            <option value="Not Interested">Not Interested</option>
            <option value="Already Booked">Already Booked</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={visitData.comments}
            onChange={handleChange}
            placeholder="Enter any additional comments"
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="followUpDate">Follow-Up Date (if required):</label>
          <input
            type="date"
            id="followUpDate"
            name="followUpDate"
            value={visitData.followUpDate}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default SiteVisit;
