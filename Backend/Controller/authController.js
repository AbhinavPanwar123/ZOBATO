const Reservation = require("../Models/reservationSchema");

const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, time, date } = req.body;
  if (!firstName || !lastName || !email || !time || !date) {
    return res.status(400).send("Please fill the fields for reseravtion");
  }
  try {
    const reservation = await new Reservation({
        firstName,
        lastName,
        email,
        phone,
        time,
        date
      });
  
      reservation.save();
    return res.status(200).send({
      success: true,
      message: "Reservation Sent Successfully",
    });
  } catch (error) {
    console.log('error=>',error);
    return res.status(500).send("server error");
  }
};

module.exports = sendReservation;