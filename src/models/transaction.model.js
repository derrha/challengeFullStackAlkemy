module.exports = (sequelize, Sequelize) => {
    const Transaction = sequelize.define("transations", {
        amount: {
            type: Sequelize.DOUBLE
        },
        description : {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATE
        },
        type: {
            type: Sequelize.STRING
        }
    });

    return Transaction;
};