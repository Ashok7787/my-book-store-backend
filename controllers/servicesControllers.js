const asyncHandler = require("express-async-handler");
const Services = require("../models/servicesModels");
//@desc Get all contacts
//@route GET /api/contacts
//@access private
const getServices = asyncHandler(async (req, res) => {
  const services = await Services.find();
  res.status(200).json(services);
});

//@desc Create New contacts
//@route POST /api/contacts
//@access private
const createService = asyncHandler(async (req, res) => {
  console.log("The request body : ", req.body);
  const { category, subCategory } = req.body;
  if (!category || !subCategory) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const service = await Services.create({
    category,
    subCategory,
  });
  res.status(201).json(service);
});

//@desc Get  contacts
//@route GET /api/contacts/:id
//@access private
const getService = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
  res.status(200).json(service);
});

//@desc Update contacts
//@route PUT /api/contacts/:id
//@access private
const updateService = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
//   if (service.user_id.toString() !== req.user.id) {
//     res.status(403);
//     throw new Error("User don't have permission to update other contacts");
//   }
  const updatedService = await Services.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json(updatedService);
});

//@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access private
const deleteService = asyncHandler(async (req, res) => {
  const service = await Services.findById(req.params.id);
  if (!service) {
    res.status(404);
    throw new Error("Service not found");
  }
//   if (contact.user_id.toString() !== req.user.id) {
//     res.status(403);
//     throw new Error("User don't have permission to delete other contacts");
//   }
  await Services.deleteOne({ _id: req.params.id });
  res.status(200).json(service);
});

module.exports = {
  getServices,
  createService,
  getService,
  updateService,
  deleteService
};
