const controller = require("../controllers/users.controller");
const upload = require("../middlewares/multi_upload");
const temporalIdMiddleware = require("../middlewares/temporalId.middleware");
const multer = require("multer");

module.exports = (app) => {
    app.post("/api/users/signup/", temporalIdMiddleware , upload.fields([{name: "INE", maxCount: 1}, {name: "Domicilio", maxCount: 1}, {name: "Foto", maxCount: 1}]), controller.SignUp);
};