// components/ErrorMessage.jsx
import React from "react";
import { Link } from "react-router-dom";

const ErrorMessage = ({ title = "Error", message = "Something went wrong." }) => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
    <div className="text-5xl mb-4" role="img" aria-label="Error">⚠️</div>
    <h2 className="text-2xl font-bold text-gray-800 mb-2">{title}</h2>
    <p className="text-gray-500 mb-6 max-w-sm">{message}</p>
    <Link
      to="/"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
    >
      ← Back to listings
    </Link>
  </div>
);

export default ErrorMessage;
