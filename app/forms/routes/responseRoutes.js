const express = require("express");
const router = express.Router();
const responseController = require('../controllers/responseController');

router.get("/:id", responseController.getResponse);

router.post("/", responseController.createResponse);

module.exports = router;
