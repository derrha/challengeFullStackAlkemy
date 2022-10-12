const dbConfig = require('../config/db.config')
const Sequelize = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model')(sequelize, Sequelize)
db.account = require('./account.model')(sequelize, Sequelize)
db.transaction = require('./transaction.model')(sequelize, Sequelize)

db.user.hasOne(db.account);
db.account.belongsTo(db.user);
db.account.hasMany(db.transaction, {as: "transactions"});
db.transaction.belongsTo(db.account, {
    foreignKey: "accountId",
    as : "account"
});

module.exports = db
