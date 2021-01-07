// module.exports = (sequelize, DataTypes) => {
//     const Operadora = sequelize.define("Operadora", {
//         id: DataTypes.INTEGER,
//         cnpj: DataTypes.STRING,
//         nome: DataTypes.STRING,
//         site: DataTypes.STRING,
//         telefone: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'operadora',
//     });

//     return Operadora;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Operadora =  connection.define("Operadora", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cnpj: Sequelize.STRING,
    nome: Sequelize.STRING,
    site: Sequelize.STRING,
    telefone: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'operadora',
});
Operadora.sync({force: true})

module.exports = Operadora;