const express = require("express");
const router = express.Router();
const statesController = require('../../controllers/statesController');

// get all states route
router.route("/")
    .get(statesController.getAllStates);

// get single state
router.route("/:state")
    .get(statesController.getState);

router.route("/:state/funfact")
    .get(statesController.getFunFact);

// get state  capital info
router.route("/:state/capital")
    .get(statesController.getCapital)

// get state and state nickname
router.route("/:state/nickname")
    .get(statesController.getNickname)

// get state and population
router.route("/:state/population")
    .get(statesController.getPopulation)

// get state and admission date
router.route("/:state/admission")
    .get(statesController.getAdmissionDate)

// create state code and facts route
router.route("/:state/funfact")
    .post(statesController.createInfo)
    .patch(statesController.updateInfo)
    .delete(statesController.deleteFunFact)
module.exports = router;