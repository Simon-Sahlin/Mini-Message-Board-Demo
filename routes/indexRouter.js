const { Router } = require("express");
const indexController = require("../controllers/indexController")
const router = Router();


router.get("/", indexController.getIndex);

router.get("/:messageId", indexController.getMessage);

module.exports = router;