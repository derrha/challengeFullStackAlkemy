module.exports = app => {
    const account = require("../controllers/account.controller");

    var router = require("express").Router();

    // Create a new Account
    router.post("/", account.create);

    // Retrieve all Accounts
    router.get("/", account.findAll);

    // Retrieve a single Account with id
    router.get("/:id", account.findOne);

    // Update a Account with id
    router.put("/:id", account.update);

    // Delete a Account with id
    router.delete("/:id", account.delete);

    // Delete all Accounts
    router.delete("/", account.deleteAll);

    app.use('/api/accounts', router);
}