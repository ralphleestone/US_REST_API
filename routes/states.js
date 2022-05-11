const express = require("express");
const router = express.Router();
const statesController = require('../../controllers/statesController');
const statesData = require("data");


/*
router.route("/states/:state/funfact")
.post(statesController.createStateInfo)
//.patch(statesController.updateStateInfo);
*/

router.route('/:state')
  .get(verifyState(), statesController.getAllStates)