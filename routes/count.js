var express = require("express");
const { dashboardCount } = require("../services/count/count.controller");
var router = express.Router();

router.get("/", dashboardCount);

module.exports = router;
