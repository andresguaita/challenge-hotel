const { Router } = require("express");
const router = Router();
const  User  = require("./User");
const Bookings = require("./Bookings")

router.use("/", User);
router.use("/", Bookings);



module.exports = router;

