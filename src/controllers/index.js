/**
 * @desc Controls routes for all models / entities
 * @param app Express.js app
 * @see https://expressjs.com/en/guide/routing.html
 */

function controller_v1(express) {

    const router = this.express.Router();

    router.get("/", (req, res, next) => {
        res.json({ message: "Hello World" });
    });

    return router;

}

module.exports = { 
    controller_v1
 };