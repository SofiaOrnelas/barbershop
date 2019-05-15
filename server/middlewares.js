function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next()
  else next({ status: 403, message: 'Unauthorized' })
}

function isEmployee(req, res, next) {
  if (req.isAuthenticated() && req.user.role !== "Customer") next()
  else next({ status: 403, message: 'Unauthorized' })
}


module.exports = {
  isLoggedIn, 
  isEmployee
}
