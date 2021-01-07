// module.exports = (sequelize, DataTypes) => {
//     const OrgaoEmissor = sequelize.define("OrgaoEmissor", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'orgao_emissor',
//     });

//     return OrgaoEmissor;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const OrgaoEmissor =  connection.define("OrgaoEmissor", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'orgao_emissor',
});
OrgaoEmissor.sync({force: true})

module.exports = OrgaoEmissor;