const authenticationMiddleware = async (req, res, next) => {
  console.log('AUTH');
  console.log(req.headers.authorization);
  next();
};

module.exports = authenticationMiddleware;
