const express = require('express')
const app = express()
const port = 3000

const db = require('./models')
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    test()
});

require("./routing/user.routes")(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

async function test() {
    const jane = await db.user.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);
    const maxiAcc = await db.account.create({balance : 15000, userId : jane.id})
    console.log(maxiAcc)
    const transaction1 = await db.transaction.create({amount : 1000, description : "jane", date : new Date("11-05-2022"), type : "algo", accountId : maxiAcc.id})
    console.log(transaction1)
}