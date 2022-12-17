const { Lesson } = require("../../services");
const ROUTE = "/lesson";

/**
 * @desc Lessons Controller
 * @returns Router
 */

module.exports = function LessonRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}/`, createLesson);
  router.get(`${ROUTE}/:id`, getLesson);
  router.put(`${ROUTE}/:id`, updateLesson);
  router.delete(`${ROUTE}/:id`, deleteLesson);
  router.get(`${ROUTE}s/`, getAllLesson);

  return router;

  // Functions

  function getAllLesson(req, res, next) {
    const options = req.query;

    Lesson.getAll(options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getLesson(req, res, next) {
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

  function updateLesson(req, res, next) {
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

  function createLesson(req, res, next) {
    const options = req.body;

    Lesson.create(options)
      .then((results) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function deleteLesson(req, res, next) {
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
