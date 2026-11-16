// pages/BusinessList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader       from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

const API_BASE    = import.meta.env.VITE_API_URL || "http://localhost:5000";
const PLACEHOLDER = "https://placehold.co/400x300?text=No+Image";

const BusinessList = () => {
  const [businesses, setBusinesses] = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE}/api/businesses`)
      .then(({ data }) => setBusinesses(data))
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error)   return <ErrorMessage title="Could not load listings" message="Please try again later." />;

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Directory</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {businesses.map((biz) => (
          <Link
            key={biz.id}
            to={`/businesses/${biz.id}`}
            className="block rounded-xl overflow-hidden shadow-md bg-white hover:shadow-xl transition-shadow border border-gray-100"
          >
            <img
              src={biz.image_url || PLACEHOLDER}
              alt={biz.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {biz.is_featured && (
                <span className="text-xs bg-yellow-100 text-yellow-800 font-semibold px-2 py-0.5 rounded-full mb-2 inline-block">
                  ⭐ Featured
                </span>
              )}
              <h2 className="text-lg font-bold text-gray-900 truncate">{biz.name}</h2>
              <p className="text-sm text-blue-600 mb-1">{biz.category_name}</p>
              <p className="text-sm text-gray-500 line-clamp-2">{biz.description}</p>
              <p className="text-xs text-gray-400 mt-2">📍 {biz.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BusinessList;
