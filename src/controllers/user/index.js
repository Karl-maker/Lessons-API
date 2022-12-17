const { User } = require("../../services");
const auth = require("../../auth");
const ROUTE = "/user";

module.exports = function UserRoutes() {
  const router = this.express.Router();

  router.get(
    `${ROUTE}/id/:user_id`,
    auth.user.call({ strict: false }),
    getUserById
  );

  router.get(
    `${ROUTE}/email/:email`,
    auth.user.call({ strict: false }),
    getUserByEmail
  );

  router.put(
    `${ROUTE}/email/:email`,
    auth.user.call({ strict: true }),
    auth.grant_access("params", "email"),
    updateUserByEmail
  );

  router.put(
    `${ROUTE}/id/:user_id`,
    auth.user.call({ strict: true }),
    auth.grant_access("params", "user_id"),
    updateUserById
  );

  router.delete(
    `${ROUTE}/id/:user_id`,
    auth.user.call({ strict: true }),
    auth.grant_access("params", "user_id"),
    deleteUserById
  );

  router.delete(
    `${ROUTE}/email/:email`,
    auth.user.call({ strict: true }),
    auth.grant_access("params", "email"),
    deleteUserByEmail
  );

  return router;

  // Methods

  function getUserById(req, res, next) {
    const { user_id } = req.params;
    User.getOneById(user_id)
      .then(({ results }) => {})
      .catch((err) => {});
  }

  function getUserByEmail(req, res, next) {
    const { email } = req.params;
    User.getOneByEmail(email)
      .then(({ results }) => {})
      .catch((err) => {});
  }

  function updateUserByEmail(req, res, next) {
    const { email } = req.params;
    const options = req.body;

    User.updateByEmail(email, options)
      .then(({ results }) => {})
      .catch((err) => {});
  }

  function updateUserById(req, res, next) {
    const { user_id } = req.params;
    const options = req.body;

    User.updateById(user_id, options)
      .then(({ results }) => {})
      .catch((err) => {});
  }

  function deleteUserById(req, res, next) {
    const { user_id } = req.params;

    User.deleteById(user_id)
      .then(({ results }) => {})
      .catch((err) => {});
  }

  function deleteUserByEmail(req, res, next) {
    const { email } = req.params;

    User.deleteByEmail(email)
      .then(({ results }) => {})
      .catch((err) => {});
  }
};
