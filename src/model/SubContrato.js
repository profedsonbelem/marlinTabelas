// module.exports = (sequelize, DataTypes) => {
//     const SubContrato = sequelize.define("SubContrato", {
//         id: DataTypes.INTEGER,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'subcontrato',
//     });

//     return SubContrato;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const SubContrato =  connection.define("SubContrato", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'subcontrato',
});
SubContrato.sync({force: true})

module.exports = SubContrato;
