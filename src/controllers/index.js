/**
 * @desc Controls routes for all models / entities
 * @param app Express.js app
 * @see https://expressjs.com/en/guide/routing.html
 */

function controller_v1(express) {
  const router = this.express.Router();

  router.use(
    require("./lesson").call({ express: this.express }),
    require("./course").call({ express: this.express }),
    require("./subscription").call({ express: this.express }),
    require("./lesson-view").call({ express: this.express }),
    require("./user").call({ express: this.express })
  );

  return router;
}

module.exports = {
  controller_v1,
};
