const express = require("express");
const router = express.Router();
const statesController = require('../controllers/statesController');

router.route("/states/:state/population")
.post(statesController.createStateInfo)
//.patch(statesController.updateStateInfo);