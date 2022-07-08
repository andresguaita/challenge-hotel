const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { setroomsTypes } = require("./helpers/roomsDataTypes");


// Sincronizando base de datos.
conn.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, async () => {
    await setroomsTypes()
    console.log(`Listen in ${process.env.PORT || 3001}`);
  });
});
