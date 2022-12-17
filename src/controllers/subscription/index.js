const { Subscription } = require("../../services");
const auth = require("../../auth");
const communication = require("../../utils/communicate");
const ROUTE = "/subscription";

/**
 * @desc Sunscription Controller
 * @returns Router
 */

module.exports = function SubscriptionRoutes() {
  const router = this.express.Router();

  router.post(`${ROUTE}`, auth.user.call({ strict: true }), createSubscription);
  router.delete(
    `${ROUTE}/:subscription_id`,
    auth.user.call({ strict: true }),
    endSubscription
  );
  router.get(`${ROUTE}`, auth.user.call({ strict: false }), getSubscription);
  router.get(
    `${ROUTE}s`,
    auth.user.call({ strict: false }),
    getAllSubscriptions
  );

  return router;

  // Methods

  function createSubscription(req, res, next) {
    const options = req.body;
    const user_id = req.user.id;

    Subscription.create(user_id, options)
      .then(({ results, template, context, medium }) => {
        communication.send(template, content, medium);
      })
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function endSubscription(req, res, next) {
    const { subscription_id } = req.params;

    Subscription.delete(subscription_id)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getSubscription(req, res, next) {
    const { id } = req.params;

    Subscription.getOneById(id)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }

  function getAllSubscriptions(req, res, next) {
    const options = req.query;

    Subscription.getAll(options)
      .then(({ results }) => {
        res.json(results);
      })
      .catch((err) => {
        next(err);
      });
  }
};
