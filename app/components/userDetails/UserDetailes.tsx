import React, { useState } from 'react';
import './style.css'; // Import your CSS file for styling
import HeaderPage from '../header/HeaderPage';
import { useRouter } from 'next/router';
const UserDetails = () => {
  const [userDetails, setUerDetails] = useState({
    firstName: '',
    lastName: '',
    number: '',
    street: '',
    city: '',
    state: '',
    zip: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUerDetails({ ...userDetails, [name]: value });
  };
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log('Shipping Address:', userDetails);
    localStorage.setItem('userDetails', JSON.stringify(userDetails));
    router.push('/thankyou');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: '' }}>Enter your Shipping Address</h2>
        <div>
          <label>
            FirstName:
            <input type='text' name='firstName' value={userDetails.firstName} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            LastName:
            <input type='text' name='lastName' value={userDetails.lastName} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Mobile Number:
            <input type='text' name='number' value={userDetails.number} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Street:
            <input type='text' name='street' value={userDetails.street} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            City:
            <input type='text' name='city' value={userDetails.city} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            State:
            <input type='text' name='state' value={userDetails.state} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label>
            Zip Code:
            <input type='text' name='zip' value={userDetails.zip} onChange={handleChange} required />
          </label>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
};

export default UserDetails;
