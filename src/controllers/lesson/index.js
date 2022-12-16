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
    res.json({ message: "Hello Lessons" });
  }

  function getLesson(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function updateLesson(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function createLesson(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }

  function deleteLesson(req, res, next) {
    res.json({ message: "Hello Lessons" });
  }
};
