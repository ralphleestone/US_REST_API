const States = require('../model/States');

// controller state
const data = {
    states: require('../model/states.json'),
    setStates: function(data){this.states = data}
}

const getAllStates = async (req, res) => {
    const states = await States.find();
    if (!states) return res.status(204).json({ 'message': 'No states found.'});
    res.json(states);
}

const createStateInfo = async (req, res) => {
    console.log("Here");
    if (!req?.body?.state || !req.body?.funfact) {
        console.log("reached here");
        return res.status(400).json({ message: "stateCode and funfact required." });
    }

    try{
        const result = await StateDB.create({
            stateCode: req.body.state,
            funfact: req.body.funfact,
        });
        res.status(201).json(result);
    } catch(err){
        console.error(err);
    }
}

/*
const getOneState  = async (req, res) => {
    console.log("Here");
    if (!req?.body?.state || !req.body?.funfact) {
        console.log("reached here");
        return res.status(400).json({ message: "stateCode and funfact required." });
    }

    try{
        const result = await StateDB.create({
            stateCode: req.body.state,
            funfact: req.body.funfact,
        });
        res.status(201).json(result);
    } catch(err){
        console.error(err);
    }
}
*/

/*
const updateStatInfo = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    if (req.body.firstname) employee.firstname = req.body.firstname;
    if (req.body.lastname) employee.lastname = req.body.lastname;
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    const unsortedArray = [...filteredArray, employee];
    data.setEmployees(unsortedArray.sort((a, b) => a.id > b.id ? 1 : a.id < b.id ? -1 : 0));
    res.json(data.employees);
}
*/

/*
const deleteStateFunfact = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.body.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.body.id} not found` });
    }
    const filteredArray = data.employees.filter(emp => emp.id !== parseInt(req.body.id));
    data.setEmployees([...filteredArray]);
    res.json(data.employees);
}
*/

/*
const getCapital = (req, res) => {
    const employee = data.employees.find(emp => emp.id === parseInt(req.params.id));
    if (!employee) {
        return res.status(400).json({ "message": `Employee ID ${req.params.id} not found` });
    }
    res.json(employee);
}
*/

module.exports = {
    getAllStates,
    //getSingleStates,
    //getCapital,
    createStateInfo,
    //updateStatInfo,
    //deleteStateFunfact,
}