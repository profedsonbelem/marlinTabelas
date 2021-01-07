// module.exports = (sequelize, DataTypes) => {
//     const AreaAtuacao = sequelize.define("AreaAtuacao", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true
//         },
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'area_atuacao',
//     });

//     return AreaAtuacao;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const AreaAtucao = connection.define("AreaAtucao", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'area_atuacao',
});

    AreaAtucao.sync({force: true})

    module.exports = AreaAtucao;

