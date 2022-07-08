const express = require('express')
const router = express.Router()
const { createBookings,getBookings, getRooms, updateBooking } = require('../controllers/Bookings');
const { payBooking } = require('../controllers/Transactions');
const { validateJWT } = require('../middleware/validate-token');


router.post("/createBookings",validateJWT,createBookings);
router.post("/payBooking",payBooking);
router.get("/getBookings",getBookings);
router.get("/getRooms",getRooms);updateBooking
router.put("/updateBooking",updateBooking);
module.exports = router;