'use client';
import React from 'react';
import Button from './Button';

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('logged in');
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col w-96 justify-center rounded-lg bg-white h-80 p-8 shadow-md">
          <h2
            className="font-bold text-center mb-4 text-2xl
          ">
            Login
          </h2>
          <label htmlFor="username">Username</label>
          <input
            className="w-full p-2 border my-2 border-gray-300 rounded-xl"
            type="text"
            id="username"
          />
          <label htmlFor="password">Password</label>
          <input
            className="w-full p-2 my-2 border border-gray-300 rounded-xl"
            type="password"
            id="password"
          />
          <Button
            type="submit"
            className="bg-sky-500 text-white rounded-sm mt-2">
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
