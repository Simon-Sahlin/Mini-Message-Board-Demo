const { Router } = require("express");
const formController = require("../controllers/formController")
const router = Router();


router.get("/", formController.getIndex)


module.exports = router;