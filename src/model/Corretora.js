// module.exports = (sequelize, DataTypes) => {
//     const Corretora = sequelize.define("Corretora", {
//         id: DataTypes.INTEGER,
//         cnpj: DataTypes.STRING,
//         nome: DataTypes.STRING,
//         razaoSocial: DataTypes.STRING,
//         possuiSupervisor: DataTypes.BOOLEAN,
//         codigo: DataTypes.STRING,
//         email: DataTypes.STRING,
//         intAtivo: DataTypes.BOOLEAN,
//         indLiberacaoColaborador: DataTypes.BOOLEAN,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'corretora',
//     });

//     return Corretora;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Corretora =  connection.define("Corretora", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cnpj: Sequelize.STRING,
    nome: Sequelize.STRING,
    razaoSocial: Sequelize.STRING,
    possuiSupervisor: Sequelize.BOOLEAN,
    codigo: Sequelize.STRING,
    email: Sequelize.STRING,
    intAtivo: Sequelize.STRING,
    indLiberacaoColaborador: Sequelize.BOOLEAN,
    
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'corretora',
});
Corretora.sync({force: true})

module.exports = Corretora;