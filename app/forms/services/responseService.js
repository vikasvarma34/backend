const Response = require("../models/responseModel");

const getAllResponses = async () => Response.find();

const getResponse = async (id) => Response.findOne({ _id: id })

const createResponse = async (data) => new Response(data).save();

const updateResponse = async (id, data) => Response.findOneAndUpdate({ _id: id }, data);

const removeResponse = async (id) => Response.findByIdAndDelete(id);

module.exports = { getAllResponses, getResponse, createResponse, updateResponse, removeResponse };
