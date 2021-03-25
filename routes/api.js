var express = require('express');
var router = express.Router();
const countriesCtrl = require('../controllers/api/countries')
router.get("/countries", countriesCtrl.index)
router.get("/countries/:id", countriesCtrl.show)
router.post("/countries", countriesCtrl.create)
router.put("/countries/:id", countriesCtrl.update)
router.delete("/countries/:id", countriesCtrl.delete)
module.exports = router;