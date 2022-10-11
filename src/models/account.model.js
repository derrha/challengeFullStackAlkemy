module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("account", {
        balance: {
            type: Sequelize.DOUBLE
        },
    });

    return Account;
};