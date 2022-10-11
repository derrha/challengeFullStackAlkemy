const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const db = require('./models')
db.sequelize.sync({ force: true }).then(() => {
    console.log("Drop and re-sync db.");
    test()
});

async function test() {
    const jane = await db.user.create({ firstName: "Jane", lastName: "Doe" });
    console.log("Jane's auto-generated ID:", jane.id);
}