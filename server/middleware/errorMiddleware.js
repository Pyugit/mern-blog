//unsupported 404 routes
const notFound = (req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  console.log('test notFound')
  res.status(404);
  next(error);
};

//Middleware to handle Errors
const errorHandler = (error, req, res, next) => {
  if (req.headerSent) {
    console.log('test errorHandler')
    return next(error);
  }
  console.log('test errorHandler')
  res
    .status(error.code || 500)
    .json({ message: error.message || "an unknown error occured" });


};
module.exports = { notFound, errorHandler };
