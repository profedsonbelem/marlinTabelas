const Movimentacao = require("./Movimentacao");
const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

// module.exports = (sequelize, DataTypes) => {
    const AbrangenciaGeografica = connection.define("AbrangenciaGeografica", {
        id:  {
            type: Sequelize.STRING,
            primaryKey: true
        },
        descricao: Sequelize.STRING,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'abrangencia_geografica',
    });

    // AbrangenciaGeografica.belongsTo(Movimentacao);
    AbrangenciaGeografica.sync({force: true})

    // return AbrangenciaGeografica;
    module.exports = AbrangenciaGeografica;
// };