// module.exports = (sequelize, DataTypes) => {
//     const Profissao = sequelize.define("Profissao", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'profissao',
//     });

//     return Profissao;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Profissao =  connection.define("Profissao", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'profissao',
});
Profissao.sync({force: true})

module.exports = Profissao;