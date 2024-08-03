const { Router } = require("express");
const formController = require("../controllers/formController")
const router = Router();


router.get("/", formController.getIndex);

router.post("/", formController.postIndex);


module.exports = router;