const { Bookings, Rooms, Transaction, User } = require("../db");
const {v4} = require('uuid');

exports.payBooking= async(req, res) => {

    try {

    const {
        bookingId
        } = req.body;

    const transactionId= v4();

    
    /// En este punto deberia realizarse el proceso con el operador de pago, dependiente de
    /// la respuesta se actualizara o no, en este ejemplo asumiremos que el pago se realizar
    /// de manera exitosa.
    
    const bookings= await Bookings.findOne({
        include: {all: true},where:{
            id: bookingId
        }
    })

   const transaction= await Transaction.create({
        id: transactionId,
        bookingsId: bookings.id,
        amount : bookings.rooms[0].costNight * bookings.dayStay,
        state: "Pagado",
        paymentId: transactionId,
        paymentMethod : "Tarjeta de credito"
    });

    await Bookings.update({
        state: "Pagado",
        transactionId : transaction.id
    }, {
        where: {
            id: bookingId,
        }
    });

      res.status(201).send({
        ok: true,
        msg: "Pago realizado con exito",
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