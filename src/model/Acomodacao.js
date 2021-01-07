// module.exports = (sequelize, DataTypes) => {
//     const Acomodacao = sequelize.define("Acomodacao", {
//         id: Sequelize.INTEGER,
//         descricao: Sequelize.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'acomodacao',
//     });

//     Acomodacao.sync({force: true})
   

//     // return Acomodacao;
//     module.exports = Acomodacao;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Acomodacao =  connection.define("Acomodacao", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'acomodacao',
});
Acomodacao.sync({force: true})

module.exports = Acomodacao;
