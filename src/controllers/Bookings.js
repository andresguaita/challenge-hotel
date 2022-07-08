const { Bookings, Rooms, Transaction, User } = require("../db");
const {v4} = require('uuid')
exports.createBookings= async(req, res) => {
    try {
      const {
        dayStay,
        clientId,
        roomId,
      } = req.body;
      const room = await Rooms.findOne({
        where:{
            id: roomId
        }
    });


    const bookingDB = await Bookings.create({
        id: v4(),
        dayStay,
        clientId,
        userId: clientId,
        state: "Pendiente",
    });

      bookingDB.addRooms(roomId)

      res.status(201).send({
        ok: true,
        msg: "Reserva exitosa",
        bookingId: bookingDB.id
      });
    } catch (error) {
        res.status(500).send({
            ok: false,
            error : error,
            msg: "Error en la base de datos"
          });
      console.log(error);
    }
  }

exports.getBookings= async(req, res) => {

  try {
    
  const bookings= await Bookings.findAll({include: {all: true}})
      

    res.status(201).send({
      ok: true,
      msg: "Reservas obtenidas exitosamente",
      bookings: bookings
    });
  } catch (error) {
      res.status(500).send({
          ok: false,
          error : error,
          msg: "Error en la base de datos"
        });
    console.log(error);
  }
}

exports.getRooms= async(req, res) => {

  try {
    
  const rooms= await Rooms.findAll()
      
    res.status(201).send({
      ok: true,
      msg: "Habitaciones obtenidas exitosamente",
      rooms: rooms
    });
  } catch (error) {
      res.status(500).send({
          ok: false,
          error : error,
          msg: "Error en la base de datos"
        });
    console.log(error);
  }
}

exports.updateBooking= async(req, res) => {

  try {

    const {
      bookingId,
    } = req.body;
    
  await Bookings.update({
    state: "Eliminado",
}, {
    where: {
        id: bookingId,
    }
});

    res.status(201).send({
      ok: true,
      msg: "Reserva cancelada exitosamente",
      bookingsId: bookingId
    });
  } catch (error) {
      res.status(500).send({
          ok: false,
          error : error,
          msg: "Error en la base de datos"
        });
    console.log(error);
  }
}