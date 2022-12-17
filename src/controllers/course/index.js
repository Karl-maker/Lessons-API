const { Lesson } = require("../../services");
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

    Lesson.getAll(options)
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

    Lesson.getOneById(id, options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function updateCourse(req, res, next) {
    const { id } = req.params;
    const options = req.body;

    Lesson.update(id, options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function createCourse(req, res, next) {
    const options = req.body;

    Lesson.create(options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function deleteCourse(req, res, next) {
    const { id } = req.params;

    Lesson.delete(id)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }
};