// middleware/validateId.js
const validateId = (req, res, next) => {
  const numericId = Number(req.params.id);
  if (!Number.isInteger(numericId) || numericId < 1) {
    return res.status(400).json({ message: "Invalid ID. Must be a positive integer." });
  }
  next();
};

module.exports = validateId;
