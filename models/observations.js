module.exports = function(sequelize, DataTypes) {
  var observation = sequelize.define("observation", {
    name: DataTypes.STRING,
    howMany: DataTypes.INTEGER,
    lat: DataTypes.FLOAT,
    lng: DataTypes.FLOAT,
    obsDt: DataTypes.DATE
  });
  return observation;
};
