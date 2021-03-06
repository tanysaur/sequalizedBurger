//
// module.exports = function(sequelize, DataTypes) {
//   var Burger = sequelize.define("burger", {
//     id: DataTypes.INTEGER,
//     burger_name: DataTypes.STRING,
//     devoured: DataTypes.STRING
//
//     //,date_created: DataTypes.DATETIME
//   });
//   return Burger;
// };

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    date_created: {
      allowNull: false,
      type: DataTypes.DATE
    },
    date_updated:{
      allowNull: false,
      type: DataTypes.DATE
    }
  });
  return Burger;
};



//
// // This may be confusing but here Sequelize (capital) references the standard library
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelizeConnection = require("../config/connection.js");
//
// // Creates a "Chirp" model that matches up with DB
// var Chirp = sequelizeConnection.define("chirp", {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   author: {
//     type: Sequelize.STRING
//   },
//   body: {
//     type: Sequelize.STRING
//   },
//   created_at: {
//     type: Sequelize.DATE
//   }
// }, {
//   timestamps: false
// });
//
// // Syncs with DB
// Chirp.sync();
//
// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = Chirp;
