/*jshint esversion: 6 */
module.exports = (sequelize, Sequelize) => {
    const Prediccion = sequelize.define("Predicciones", {
        idUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idFecha: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idLocal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        idVisitante: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        golesLocal: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        golesVisitante: {
            type: Sequelize.INTEGER,
            allowNull: false
        },


    });

    return Prediccion;
};