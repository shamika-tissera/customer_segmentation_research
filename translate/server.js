var express = require("express");
var translateTrier = require("./translate-requester.js");

var app = express();
app.listen(3000, () => {
    console.log("Server running on port 3000");
});

app.get("/translate", async (req, res, next) => {
    let out = await translateTrier('So uma peça que veio rachado mas tudo bem rs');
    console.log('====================================');
    console.log(out);
    console.log('====================================');
    res.json({ out });
});
