const ROUTE = "/course";

/**
 * @desc Courses Controller
 * @returns Router
 */

module.exports = function CourseRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}/`, createCourse);
  router.get(`${ROUTE}/:id`, getCourse);
  router.put(`${ROUTE}/:id`, updateCourse);
  router.delete(`${ROUTE}/:id`, deleteCourse);
  router.get(`${ROUTE}s/`, getAllCourses);

  return router;

  // Methods

  function getAllCourses(req, res, next) {}

  function getCourse(req, res, next) {}

  function updateCourse(req, res, next) {}

  function createCourse(req, res, next) {}

  function deleteCourse(req, res, next) {}
};
