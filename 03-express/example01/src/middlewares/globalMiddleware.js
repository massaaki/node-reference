module.exports = (req, res, next) => {
  console.log('some global middleware');
  next();
}