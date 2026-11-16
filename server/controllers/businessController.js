// controllers/businessController.js
// ─────────────────────────────────────────────────────────────────────────────
// MOCK MODE — returns hardcoded sample data so the app works without a database.
// When you are ready to connect PostgreSQL:
//   1. npm install pg
//   2. Fill in server/.env with real credentials
//   3. Replace this file with the real version (businessController.real.js)
// ─────────────────────────────────────────────────────────────────────────────

// Sample data that mirrors the real database schema exactly
const MOCK_BUSINESSES = [
  {
    id: 1,
    name: "The Spice Garden",
    description:
      "Award-winning South Indian cuisine in the heart of the city.\nFreshly prepared thalis, dosas, and biryanis since 1998.\nCome for the food, stay for the ambiance.",
    address: "12 MG Road, Nungambakkam",
    location: "Chennai",
    contact_number: "+91 98765 43210",
    whatsapp_number: "+91 98765 43210",
    website_url: "https://example.com",
    image_url:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
    is_featured: true,
    category_name: "Restaurant",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 2,
    name: "Tech Hub Repairs",
    description:
      "Fast and reliable phone and laptop repairs with a 30-day warranty on all parts.\nWalk-ins welcome. Most repairs done same day.",
    address: "45 Anna Salai, Teynampet",
    location: "Chennai",
    contact_number: "+91 91234 56789",
    whatsapp_number: "+91 91234 56789",
    website_url: null,
    image_url:
      "https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=600",
    is_featured: false,
    category_name: "Services",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 3,
    name: "Green Leaf Organics",
    description:
      "Fresh organic vegetables and fruits delivered to your door.\nSourced directly from local farms. Weekly subscription boxes available.",
    address: "7 Raja Street, T.Nagar",
    location: "Chennai",
    contact_number: "+91 90000 11223",
    whatsapp_number: "+91 90000 11223",
    website_url: "https://greenleaf.example.com",
    image_url:
      "https://images.unsplash.com/photo-1543168256-418811576931?w=600",
    is_featured: true,
    category_name: "Retail",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
  {
    id: 4,
    name: "Studio 360 Photography",
    description:
      "Professional photography for weddings, portraits, and corporate events.\nOver 500 happy clients. Book your session today.",
    address: "88 Besant Nagar Beach Road",
    location: "Chennai",
    contact_number: "+91 99887 65432",
    whatsapp_number: "+91 99887 65432",
    website_url: null,
    image_url: null, // intentionally null to test placeholder
    is_featured: false,
    category_name: "Services",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  },
];

// GET /api/businesses  — returns all businesses
const getAllBusinesses = async (req, res, next) => {
  try {
    return res.status(200).json(MOCK_BUSINESSES);
  } catch (error) {
    next(error);
  }
};

// GET /api/businesses/:id  — returns one business by id
const getBusinessById = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Validate: must be a positive integer
    const numericId = Number(id);
    if (!Number.isInteger(numericId) || numericId < 1) {
      return res.status(400).json({
        message: "Invalid business ID. Must be a positive integer.",
      });
    }

    // Find in mock array
    const business = MOCK_BUSINESSES.find((b) => b.id === numericId);

    if (!business) {
      return res.status(404).json({ message: "Business not found." });
    }

    return res.status(200).json(business);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllBusinesses, getBusinessById };
