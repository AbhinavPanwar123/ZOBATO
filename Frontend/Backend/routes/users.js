const express = require('express');
const router = express.Router();
const sendReservation = require ('../Controller/authController')

/* Post Reservation */ 
router.post('/send',sendReservation);

module.exports = router;
