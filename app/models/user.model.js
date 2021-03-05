/*jshint esversion: 6 */
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("Users", {
        name: {
            type: Sequelize.STRING
        },
        lastname: {
            type: Sequelize.STRING
        },
        nickname: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }

    });

    return User;
};