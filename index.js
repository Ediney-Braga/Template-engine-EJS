// Trabalhando com o template engine EJS //

const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { setEngine } = require("crypto");



let users = [
    {
        id: 0,
        name: "Ediney",
        phone: "(21)77777-7777"
    },
    {
        id: 1,
        name: "José",
        phone: "(21)88888-8888"
    },
    {
        id: 2,
        name: "Ana",
        phone: "(21)99999-9999"
    }
]


app.set("views", path.join(__dirname, "views") );
app.set("view engine", "ejs");



app.get("/", (req, res)=>{

    res.render("user", {users: users});

})

app.get("/about", (req, res) => {

    res.render("about");

})


app.listen(3000, () => {
    console.log("Server Running...");
})