const express =require("express");
const app = express();
app.use(express.static('./'));
const server = app.listen(8080, function () {
    console.log("running now")
})