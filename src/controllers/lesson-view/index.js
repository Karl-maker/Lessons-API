const { LessonView } = require("../../services");
const auth = require("../../auth");
const ROUTE = "/lesson-view";

module.exports = function LessonViewRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}/`, auth.user.call({ strict: false }), viewLesson);
  router.get(
    `${ROUTE}s/lesson/:lesson_id`,
    auth.user.call({ strict: false }),
    getAllLessonViewsForLesson
  );
  router.get(
    `${ROUTE}s/user/:user_id`,
    auth.user.call({ strict: true }),
    auth.grant_access("params", "user_id"),
    getAllLessonViewsForUser
  );
  router.get(
    `${ROUTE}s/`,
    auth.user.call({ strict: false }),
    getAllLessonViews
  );

  return router;

  // Methods

  function viewLesson(req, res, next) {
    const options = req.body;
    let user_id = null;

    if (req.user) user_id = req.user.id;

    LessonView.create(options, user_id)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getAllLessonViewsForLesson(req, res, next) {
    const options = req.query;
    const { lesson_id } = req.params;

    LessonView.getAllForLesson(lesson_id, options)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getAllLessonViewsForUser(req, res, next) {
    const options = req.query;
    const { user_id } = req.params;

    LessonView.getAllForUser(user_id, options)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getAllLessonViews(req, res, next) {
    const options = req.query;

    LessonView.getAll(options)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }
};
