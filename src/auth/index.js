module.exports = {
  user,
  grant_access,
};

/**
 * Get user information by authenticating them
 */

function user() {
  const strict = this.strict || false;

  return (req, res, next) => {
    console.log(strict);

    next();
  };
}

function grant_access(parameter = "params", key = "user_id") {
  return function (req, res, next) {
    console.log(req[parameter][key]);
    next();
  };
}
