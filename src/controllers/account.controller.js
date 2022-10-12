const { account } = require("../models");
const db = require("../models");
const Account = db.account;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial

exports.create = (req, res) => {
    // Validate request
    if (!req.body.balance) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const account = {
        userId: req.body.userId,
        balance: req.body.balance,
    };

    // Save Tutorial in the database
    Account.create(account)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Account.findAll({include : ["transactions"]})
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving account."
            });
        });
};

exports.findByPk = (req, res) => {
    Account.findByPk({include : ["transactions"]})
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving account."
        })
    })
}

// Find a single Tutorial with an id
exports.findOne = (req, res) => {

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {

};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {

};