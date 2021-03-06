/*jshint esversion: 6 */

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Usuario
exports.create = (req, res) => {
    // Validate request
    if (!req.body.nombre || !req.body.apellido || !req.body.nickname || !req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Usuario
    const user = {
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password
    };

    // Save Usuario in the database
    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Tutorial."
            });
        });
};