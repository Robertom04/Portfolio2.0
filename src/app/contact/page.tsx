'use client';
import React, { useState } from 'react';

const Contact = () => {
  const [result, setResult] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const onSubmit = async (event: { preventDefault: () => void; target: { name: { value: any; }; email: { value: any; }; message: { value: any; }; reset: () => void; }; }) => {
    event.preventDefault();
    setResult('Sending....');
    setSuccessMessage('');

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
      access_key: '68a29d69-907b-4bcf-9c6a-6a96b8bf0f3c',
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (data.success) {
        setResult('Form Submitted Successfully');
        setSuccessMessage('Thank you for your message! We will get back to you soon.');
        event.target.reset();
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setResult('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-[#E8E6E5] flex items-center justify-center back">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        <br/>        
        <br/>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
            If you want contact me feel free to e-mail me!! 😃
        </h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border text-gray-700 border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border text-gray-700 border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              className="w-full text-gray-700 border border-gray-400 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-[#063105] text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
        <span>{result}</span>
        {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Contact;