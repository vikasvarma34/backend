const asyncHandler = require("express-async-handler");
const ResponseService = require("../services/responseService");

const getResponse = asyncHandler(async (req, res) => {
  const response = await ResponseService.getResponse(req.params.id);
  res.json(response);
});

const createResponse = asyncHandler(async (req, res) => {
  const createdResponse = await ResponseService.createResponse(req.body);
  res.json(createdResponse);
});


module.exports = {
  getResponse,
  createResponse,
};