module.exports = app => {
    const transaction = require("../controllers/transaction.controller");

    var router = require("express").Router();

    // Create a new User
    router.post("/", transaction.create);

    // Retrieve all Users
    router.get("/", transaction.findAll);

    // Retrieve a single User with id
    router.get("/:id", transaction.findOne);

    // Update a User with id
    router.put("/:id", transaction.update);

    // Delete a User with id
    router.delete("/:id", transaction.delete);

    // Delete all Users
    router.delete("/", transaction.deleteAll);

    app.use('/api/transaction', router);
}