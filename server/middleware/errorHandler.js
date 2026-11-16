// middleware/errorHandler.js
// 4-param signature — Express identifies this as the error handler
const errorHandler = (err, req, res, next) => {
  console.error("[Error]", err.message);
  res.status(500).json({
    message: "An internal server error occurred. Please try again later.",
  });
};

module.exports = errorHandler;
