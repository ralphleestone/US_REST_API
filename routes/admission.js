const express = require("express");
const router = express.Router();
const statesController = require('../../controllers/statesController');

router.route("/states/:state/admission")
//.post(statesController.createStateInfo)
//.patch(statesController.updateStateInfo);