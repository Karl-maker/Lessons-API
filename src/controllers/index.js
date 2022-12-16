const lesson = require("../controllers/lesson");
const package = require("../controllers/package");

/**
 * @desc Controls routes for all models / entities
 * @param app Express.js app
 * @see https://expressjs.com/en/guide/routing.html
 */

function controller_v1(express) {
  const router = this.express.Router();

  router.use(
    lesson.call({ express: this.express }),
    package.call({ express: this.express })
  );

  return router;
}

module.exports = {
  controller_v1,
};
