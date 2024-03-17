const ErrorResponse = require("../utils/errorResponse");

const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  //   log to console for dev
  console.log(err);

  //   mongoose bad objectID
  if (err.name === "CastError") {
    const message = `Services not found with the id of ${err.value}`;
    error = new ErrorResponse(message, 400);
  }
  //   duplicate mongose error filed
  if ((err.code = "11000")) {
    const message = `Duplicate field error!!`;
    error = new ErrorResponse(message, 400);
  }
  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  });
};

module.exports = errorHandler;
