const { transaction } = require("../models");
const db = require("../models");
const Transaction = db.transaction;
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
    const transaction = {
        accountId: req.body.userId,
        amount: req.body.amount,
        description: req.body.description,
        date: req.body.date,
        type: req.body.type,
    };

    // Save Tutorial in the database
    Transaction.create(transaction)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Transaction."
            });
        });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    Transaction.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving user."
            });
        });
};

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