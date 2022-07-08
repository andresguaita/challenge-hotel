const roomsTypes = require('../src/utils/roomsTypes.json')
const {Rooms} = require('../src/db')

exports.setroomsTypes =  () => {
    try{
        roomsTypes.roomsTypes.forEach(async element => {
            await Rooms.findOrCreate({
                where: {
                    id: element.id,
                    description: element.description,
                    wifi: element.wifi,
                    tv : element.tv,
                    airConditioning: element.airConditioning,
                    oceanView: element.oceanView,
                    quantitytwinBed : element.quantitytwinBed,
                    quantityqueenBed: element.quantityqueenBed ,
                    costNight: element.costNight
                }
            })
        });
    }catch(error){
        return error
    }
}