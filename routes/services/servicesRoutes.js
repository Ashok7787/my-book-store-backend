const express = require("express");
const router = express.Router();
const {
    getServices,
    createService,
    getService,
    updateService,
    deleteService
} = require("../../controllers/services/servicesControllers");

router.route("/").get(getServices).post(createService);
router.route("/:id").get(getService).put(updateService).delete(deleteService);

module.exports = router;
