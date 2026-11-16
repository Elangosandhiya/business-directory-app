// pages/BusinessDetail.jsx  — Task B
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

import Loader         from "../components/Loader";
import ErrorMessage   from "../components/ErrorMessage";
import ImageGallery   from "../components/ImageGallery";
import ContactInfo    from "../components/ContactInfo";
import WhatsAppButton from "../components/WhatsAppButton";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000";

const BusinessDetail = () => {
  const { id } = useParams();

  const [business, setBusiness] = useState(null);
  const [loading,  setLoading]  = useState(true);
  const [error,    setError]    = useState(null);

  useEffect(() => {
    setBusiness(null);
    setLoading(true);
    setError(null);

    const fetchBusiness = async () => {
      try {
        const response = await axios.get(`${API_BASE}/api/businesses/${id}`);
        setBusiness(response.data);
      } catch (err) {
        if      (err.response?.status === 404) setError("404");
        else if (err.response?.status === 400) setError("400");
        else                                   setError("unexpected");
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, [id]);

  if (loading)         return <Loader />;
  if (error === "404") return <ErrorMessage title="Business Not Found"  message="This listing doesn't exist or has been removed." />;
  if (error === "400") return <ErrorMessage title="Invalid Request"      message="The ID in the URL is not valid." />;
  if (error)           return <ErrorMessage title="Something Went Wrong" message="Could not load the listing. Please try again." />;

  return (
    <div className="container mx-auto px-4 py-8 max-w-5xl">

      {/* Back link */}
      <Link to="/" className="inline-flex items-center gap-1 text-blue-600 hover:text-blue-800 mb-6 transition-colors">
        ← Back to listings
      </Link>

      {/* Featured badge */}
      {business.is_featured && (
        <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide">
          ⭐ Featured
        </span>
      )}

      <h1 className="text-3xl font-bold text-gray-900 mb-1">{business.name}</h1>

      <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-6">
        {business.category_name || "Uncategorised"}
      </span>

      {/* 1 col mobile / 2 col desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        <div>
          <ImageGallery imageUrl={business.image_url} businessName={business.name} />
        </div>

        <div className="flex flex-col gap-6">

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">About</h2>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {business.description}
            </p>
          </section>

          <ContactInfo business={business} />

          {/* Website: only shown when present */}
          {business.website_url && (
            <section>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Website</h2>
              <a
                href={business.website_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline break-all"
              >
                {business.website_url}
              </a>
            </section>
          )}

          {business.whatsapp_number && (
            <WhatsAppButton
              whatsappNumber={business.whatsapp_number}
              businessName={business.name}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export default BusinessDetail;
