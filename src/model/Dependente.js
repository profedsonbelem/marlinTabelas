// module.exports = (sequelize, DataTypes) => {
//     const Dependente = sequelize.define("Dependente", {
//         id: DataTypes.INTEGER,
//         cpf: DataTypes.STRING,
//         dataNascimento: DataTypes.STRING,
//         nomeMae: DataTypes.STRING,
//         cns: DataTypes.STRING,
//         dnv: DataTypes.STRING,
//         valorPlano: DataTypes.STRING,
//         idade: DataTypes.STRING,
//         numeroCarteirinha: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'dependente',
//     });


//     return Dependente;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Dependente =  connection.define("Dependente", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cpf: Sequelize.STRING,
    dataNascimento: Sequelize.STRING,
    nomeMae: Sequelize.STRING,
    cns: Sequelize.BOOLEAN,
    dnv: Sequelize.STRING,
    valorPlano: Sequelize.STRING,
    idade: Sequelize.STRING,
    numeroCarteirinha: Sequelize.BOOLEAN,
    
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'dependente',
});
Dependente.sync({force: true})

module.exports = Dependente;