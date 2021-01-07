// module.exports = (sequelize, DataTypes) => {
//     const TipoContratacao = sequelize.define("TipoContratacao", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'tipo_contratacao',
//     });

//     return TipoContratacao;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const TipoContratacao =  connection.define("TipoContratacao", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'tipo_contratacao',
});
TipoContratacao.sync({force: true})

module.exports = TipoContratacao;
