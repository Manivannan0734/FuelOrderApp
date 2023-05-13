import React from 'react';
import styles from '../styles/other.module.css';

const Other = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className={styles.otherContainer}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" pattern="[0-9]{10}" required />
        <label htmlFor="problem">Type of Problem:</label>
        <select id="problem" name="problem" required>
          <option value="">Select an option</option>
          <option value="Majour">Majour</option>
          <option value="Minor">Minor</option>
          <option value="other">Other</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Other;