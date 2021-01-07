// module.exports = (sequelize, DataTypes) => {
//     const Contrato = sequelize.define("Contrato", {
//         id: DataTypes.INTEGER,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'contrato',
//     });

//     return Contrato;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Contrato = connection.define("Contrato", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    }
},{
    underscored: true,
    freezeTableName: true,
    tableName: 'contrato',
});
    Contrato.sync({force: true})

    module.exports = Contrato;