/*jshint esversion: 6 */
module.exports = (sequelize, Sequelize) => {
    const PartidoJugado = sequelize.define("PartidosJugados", {
        idFecha: {
            type: Sequelize.STRING,
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

    return PartidoJugado;
};