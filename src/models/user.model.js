module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstName: {
            type: Sequelize.STRING,
        },
        lastName: {
            type: Sequelize.STRING
        },
    });

    return User;
};

