/*jshint esversion: 6 */
const users = require("../controllers/usuario.controller");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", users.create);

router.get("/", (req, res) => {
    res.send("He dado una respuesta");
});

module.exports = router;