// module.exports = (sequelize, DataTypes) => {
//     const EstadoCivil = sequelize.define("EstadoCivil", {
//         id: DataTypes.INTEGER,
//         descricao: DataTypes.STRING,
//     }, {
//         underscored: true,
//         freezeTableName: true,
//         tableName: 'estado_civil',
//     });

//     return EstadoCivil;
// };

const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

const EstadoCivil =  connection.define("EstadoCivil", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    descricao: Sequelize.STRING,
}, {
    underscored: true,
    freezeTableName: true,
    tableName: 'estado_civil',
});
EstadoCivil.sync({force: true})

module.exports = EstadoCivil;