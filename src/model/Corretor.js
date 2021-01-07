// module.exports = (sequelize, DataTypes) => {
//     const Corretor = sequelize.define("Corretor", {
//         id: DataTypes.INTEGER,
//         cpf: DataTypes.STRING,
//         nome: DataTypes.STRING,
//         email: DataTypes.STRING,
//         celular: DataTypes.BOOLEAN,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'corretor',
//     });

//     return Corretor;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Corretor = connection.define("Corretor", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    cpf: Sequelize.STRING,
    nome: Sequelize.STRING,
    email: Sequelize.STRING,
    celular: Sequelize.BOOLEAN,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'corretor',
});
    Corretor.sync({force: true})

    module.exports = Corretor;