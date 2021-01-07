// module.exports = (sequelize, DataTypes) => {
//     const Administradora = sequelize.define("Administradora", {
//         id: DataTypes.INTEGER,
//         codigoANS: DataTypes.STRING,
//         site: DataTypes.STRING,
//         telefone: DataTypes.STRING,
//         cnpj: DataTypes.BOOLEAN,
//         nomeFantasia: DataTypes.STRING,
//         razaoSocial: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'administradora',
//     });


//     return Administradora;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Administradora = connection.define("Administradora",{
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    codigoANS: Sequelize.STRING,
    site: Sequelize.STRING,
    telefone: Sequelize.STRING,
    cnpj: Sequelize.STRING,
    nomeFantasia: Sequelize.STRING,
    razaoSocial: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'administradora',
        

});
Administradora.sync({force: true})

module.exports = Administradora;