const { Lesson } = require("../../services");
const auth = require("../../auth");
const ROUTE = "/lesson";

/**
 * @desc Lessons Controller
 * @returns Router
 */

module.exports = function LessonRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}/`, auth.user.call({ strict: true }), createLesson);
  router.get(`${ROUTE}/:id`, auth.user.call({ strict: false }), getLesson);
  router.put(`${ROUTE}/:id`, auth.user.call({ strict: true }), updateLesson);
  router.delete(`${ROUTE}/:id`, auth.user.call({ strict: true }), deleteLesson);
  router.get(`${ROUTE}s/`, auth.user.call({ strict: false }), getAllLesson);

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
