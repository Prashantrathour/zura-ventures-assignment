// LoginForm.js
import React, { useState } from "react";

const LoginForm = ({ onClose, onLogin }) => {
  const [UserEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleUserEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    try {
      
      if (UserEmail === "123" && password === "123") {
        // Simulating a successful login
        onLogin({ UserEmail });
        onClose();
      } else {
        // Simulating a failed login
        setError("Invalid UserEmail or password. Please try again.");
      }
    } catch (error) {
      // Handle any error from the server
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white w-1/3 p-10 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="UserEmail"
              className="block text-sm font-medium text-gray-600"
            >
              UserEmail
            </label>
            <input
              type="email"
              id="UserEmail"
              name="UserEmail"
              value={UserEmail}
              onChange={handleUserEmailChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full"
              required
            />
          </div>

          {error && (
            <div className="text-red-500 mb-4">
              <p>{error}</p>
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-logo-color text-white rounded-md"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
