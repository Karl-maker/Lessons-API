const { Course } = require("../../services");
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

  function getAllCourses(req, res, next) {
    const options = req.query;

    Course.getAll(options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getCourse(req, res, next) {
    const { id } = req.params;
    const options = req.query;

    Course.getOneById(id, options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function updateCourse(req, res, next) {
    const { id } = req.params;
    const options = req.query;

    Course.update(id, options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function createCourse(req, res, next) {
    const options = req.body;

    Course.create(options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function deleteCourse(req, res, next) {
    const id = req.params;

    Course.delete(id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }
};
