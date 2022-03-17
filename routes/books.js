var express = require("express");
var router = express.Router();

var db = require('../data/db')

router.get("", (req, res, next) => {
    res.json(db.books);
   });

router.get("/:id", (req, res, next) => {
    var book = db.books.find(x => x.id == req.params.id)
    if (book) 
        res.json(book);
    else
        res.sendStatus(404);
   });

module.exports = router
