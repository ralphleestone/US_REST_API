const express = require("express");
const router = express.Router();
const statesController = require('../../controllers/statesController');

router.route("/states/:state/funfact")
.post(statesController.createStateInfo)
//.patch(statesController.updateStateInfo);


/*
router.route('/:state')
  .get(verifyState(), statesController.getOneState)
*/