const States = require('../model/States');
/*
const getAllStates = async (req, res) => {
    const states = await States.find();
    if (!states) return res.status(204).json({ 'message': 'No states found.'});
    res.json(states);
}
*/
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
};