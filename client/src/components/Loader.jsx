// components/Loader.jsx
import React from "react";

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-[50vh] gap-4">
    <div
      className="w-14 h-14 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"
      role="status"
      aria-label="Loading"
    />
    <p className="text-gray-500 text-sm">Loading listing…</p>
  </div>
);

export default Loader;
