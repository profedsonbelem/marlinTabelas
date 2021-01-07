// module.exports = (sequelize, DataTypes) => {
//     const Cobertura = sequelize.define("Cobertura", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'cobertura',
//     });

//     return Cobertura;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const Cobertura = connection.define("Cobertura", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'cobertura',
});
    Cobertura.sync({force: true})

    module.exports = Cobertura;
