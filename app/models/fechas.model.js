/*jshint esversion: 6 */
module.exports = (sequelize, Sequelize) => {
    const Fecha = sequelize.define("Fechas", {
        idLocal: {
            type: Sequelize.STRING,
            allowNull: false
        },
        idVistinate: {
            type: Sequelize.STRING,
            allowNull: false
        },
        fechaCampeonato: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        etapa: {
            type: Sequelize.INTEGER,
            allowNull: false
        }

    });

    return Fecha;
};