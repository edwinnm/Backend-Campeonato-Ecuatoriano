/*jshint esversion: 6 */
module.exports = (sequelize, Sequelize) => {
    const Equipo = sequelize.define("Equipos", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        },
        escudo: {
            type: Sequelize.STRING,
            allowNull: true
        },
    });

    return Equipo;
};