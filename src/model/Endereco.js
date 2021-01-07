// module.exports = (sequelize, DataTypes) => {
//     const Endereco = sequelize.define("Endereco", {
//         id: DataTypes.INTEGER,
//         cep: DataTypes.STRING,
//         logradouro: DataTypes.STRING,
//         numero: DataTypes.STRING,
//         complemento: DataTypes.STRING,
//         bairro: DataTypes.STRING,
//         cidade: DataTypes.STRING,
//         uf: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'endereco',
//     });


//     return Endereco;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Endereco =  connection.define("Endereco", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cep: Sequelize.STRING,
    logradouro: Sequelize.STRING,
    numero: Sequelize.STRING,
    complemento: Sequelize.BOOLEAN,
    bairro: Sequelize.STRING,
    cidade: Sequelize.STRING,
    uf: Sequelize.STRING,
    
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'endereco',
});
Endereco.sync({force: true})

module.exports = Endereco;