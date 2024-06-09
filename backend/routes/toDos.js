var express = require('express');
var router = express.Router();
const { addToDos, getAllToDos } = require("../controllers/toDo")

router.get('/', function (req, res, next) {
    res.send("Hello  you r in todo")

});

router.post("/create", addToDos)
router.get("/all", getAllToDos)

module.exports = router;
