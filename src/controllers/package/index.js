const ROUTE = "/package";

/**
 * @desc Package Controller
 * @returns Router
 */

module.exports = function PackageRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}/`, createPackage);
  router.get(`${ROUTE}/:id`, getPackage);
  router.put(`${ROUTE}/:id`, updatePackage);
  router.delete(`${ROUTE}/:id`, deletePackage);
  router.get(`${ROUTE}s/`, getAllPackage);

  return router;

  // Functions

  function getAllPackage(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function getPackage(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function updatePackage(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function createPackage(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function deletePackage(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }
};
