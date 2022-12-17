module.exports = {
  user,
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
