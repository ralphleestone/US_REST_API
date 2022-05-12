const express = require("express");
const router = express.Router();
const statesController = require('../../controllers/statesController');

// Get AllStates
router.route("/")
    .get(statesController.getAllStates);

// Get State
router.route("/:state")
    .get(statesController.getState);

router.route("/:state/funfact")
    .get(statesController.getFunFact);

// Get Capital
router.route("/:state/capital")
    .get(statesController.getCapital)

// Get Nickname
router.route("/:state/nickname")
    .get(statesController.getNickname)

// Get population
router.route("/:state/population")
    .get(statesController.getPopulation)

// Get Admission
router.route("/:state/admission")
    .get(statesController.getAdmission)

// Create stateCode and funfact
router.route("/:state/funfact")
    .post(statesController.createInfo)
    .patch(statesController.updateInfo)
    .delete(statesController.deleteFunFact)
module.exports = router;