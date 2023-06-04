const api = require("express").Router();

api.post("/addcost", require("./addCost"));
api.get("/report", require("./report"));
api.get("/about", require("./about"));

module.exports = api;
