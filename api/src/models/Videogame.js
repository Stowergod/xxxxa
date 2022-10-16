const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id : {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false
    },
    plataformas : {
      type: DataTypes.STRING,
      allowNull: false
    },
    fechaLanzamiento: {
      type: DataTypes.INTEGER
    },
    rating: {
      type : DataTypes.INTEGER
    },
    createdinDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
