const express = require('express')
const router = express.Router()
const { registerUser, loginUser } = require('../controllers/registerUser');


router.post("/registerUser",registerUser);
router.post("/loginUser",loginUser);

module.exports = router;
