// module.exports = (sequelize, DataTypes) => {
//     const FatorModerador = sequelize.define("FatorModerador", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'fator_moderador',
//     });

//     return FatorModerador;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const FatorModerador =  connection.define("FatorModerador", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'fator_moderador',
});
FatorModerador.sync({force: true})

module.exports = FatorModerador;