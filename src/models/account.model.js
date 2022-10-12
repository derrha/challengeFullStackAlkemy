module.exports = (sequelize, Sequelize) => {
    const Account = sequelize.define("accounts", {
        balance: {
            type: Sequelize.DOUBLE
        },
    });

    return Account;
};