// module.exports = (sequelize, DataTypes) => {
//     const Entidade = sequelize.define("Entidade", {
//         id: DataTypes.INTEGER,
//         sigla: DataTypes.STRING,
//         nome: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'entidade',
//     });

//     return Entidade;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Entidade =  connection.define("Entidade", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    sigla: Sequelize.STRING,
    nome: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'entidade',
});
Entidade.sync({force: true})

module.exports = Entidade;