const ToDos = require("../models/toDos");
const Kitten = require("../models/kitten")


const editToDos = async (req, res, next) => {
    let a=req.params.id
    console.log("aaaaaaa",a,req)
    try {
        res.send(a)
    } catch (error) {

    }
}

const addToDos = async (req, res, next) => {

    try {
        const { toDoName, toDoPriority, startTime, endTime } = req.body;
        console.log(toDoName, toDoPriority, startTime, endTime)
        if (!toDoName || !toDoPriority || !startTime || !endTime) {
            return res.status(400).send("Please fill all the fields!!!")
        }
        let a = new Kitten({ name: 'Silence' })
        const newToDo = new ToDos({
            toDoName,
            toDoPriority,
            startTime,
            endTime
        })

        await newToDo.save();
        res.status(201).send("User Registered Successfully");

    } catch (err) {
        next(err)
    }
}

const getAllToDos = async (req, res, next) => {
    try {

        const todos = await ToDos.find()
        res.status(200).send(todos)

    } catch (error) {

    }
}

module.exports = { addToDos, getAllToDos, editToDos }