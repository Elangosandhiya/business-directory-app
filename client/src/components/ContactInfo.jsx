// components/ContactInfo.jsx
import React from "react";

const ContactInfo = ({ business }) => (
  <section>
    <h2 className="text-xl font-semibold text-gray-800 mb-3">Contact & Location</h2>
    <ul className="space-y-3 text-gray-600">

      {business.address && (
        <li className="flex items-start gap-2">
          <span className="text-lg">📍</span>
          <span>{business.address}</span>
        </li>
      )}

      {business.location && (
        <li className="flex items-start gap-2">
          <span className="text-lg">🗺️</span>
          <span>{business.location}</span>
        </li>
      )}

      {business.contact_number && (
        <li className="flex items-start gap-2">
          <span className="text-lg">📞</span>
          <a href={`tel:${business.contact_number}`} className="text-blue-600 hover:underline">
            {business.contact_number}
          </a>
        </li>
      )}

    </ul>
  </section>
);

export default ContactInfo;
