import React, { useEffect, useState } from 'react';
import './style.css';
import HeaderPage from '../header/HeaderPage';

const ThankYou = () => {
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    try {
      const data = localStorage.getItem('userDetails'); // fixed key
      if (data) {
        setUserData(JSON.parse(data));
      }
    } catch (error) {
      console.error('Failed to load user details from localStorage:', error);
    }
  }, []);

  if (!userData) return <p>Loading your info...</p>;

  return (
    <>
      <div className='thank-you-container'>
        <h1>Thank You!</h1>

        <div className='user-details'>
          <h2>Your Details:</h2>
          <p>
            <strong>First Name:</strong> {userData.firstName}
          </p>
          <p>
            <strong>Last Name:</strong> {userData.lastName}
          </p>
          <p>
            <strong>Phone Number:</strong> {userData.number}
          </p>
          <p>
            <strong>Address:</strong> {userData.street}, {userData.city}, {userData.state}, {userData.zip}
          </p>
        </div>

        <h2>Related Products:</h2>
        <ul>
          <li>Product Name: Awesome Widget</li>
          <li>Product Category: Amazing Gadget</li>
          <li>Product Price: 300.00</li>
        </ul>
      </div>
    </>
  );
};

export default ThankYou;
