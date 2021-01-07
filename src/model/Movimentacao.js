const AbrangenciaGeografica = require("./AbrangenciaGeografica");
const sequelize = require("sequelize");
const connection = require("../../db/DBMysql");
const { Sequelize } = require("sequelize");

// module.exports = (sequelize, DataTypes) =>{
    const Movimentacao = connection.define("Movimentacao", {
        id:  {
            type: Sequelize.STRING,
            primaryKey: true
        },
        corretora: Sequelize.STRING,
        supervisor: Sequelize.STRING,
        corretor: Sequelize.STRING,
        cpfTitular: Sequelize.STRING,
        nomeCompletoTitular: Sequelize.STRING,
        dataNascimentoTitular: Sequelize.DATE,
        nomeMaeTitular: Sequelize.STRING,
        sexoTitular: Sequelize.STRING,
        estadoCivilTitular: Sequelize.STRING,
        rg: Sequelize.STRING,
        orgaoEmissorRgTitular: Sequelize.STRING,
        cnsTitular: Sequelize.STRING,
        dnvTitular: Sequelize.STRING,
        emailTitular: Sequelize.STRING,
        telefoneTitular: Sequelize.STRING,
        telefoneFixo: Sequelize.STRING,
        cepTitular: Sequelize.STRING,
        logradouroTitular: Sequelize.STRING,
        numeroTitular: Sequelize.STRING,
        complementoTitular: Sequelize.STRING,
        bairroTitular: Sequelize.STRING,
        estadoTitular: Sequelize.STRING,
        cidadeTitular: Sequelize.STRING,
        cpfDependente: Sequelize.STRING,
        nomeCompletoDependente: Sequelize.STRING,
        dataNascimentoDependente: Sequelize.STRING,
        nomeMaeDependente: Sequelize.STRING,
        sexoDependente: Sequelize.STRING,
        estadoCivilDependente: Sequelize.STRING,
        grauParentescoDependente: Sequelize.STRING,
        cnsDependente: Sequelize.STRING,
        dnvDependente: Sequelize.STRING,
        cpfResponsavelFinanceiro: Sequelize.STRING,
        nomeCompletoResponsavelFinanceiro: Sequelize.STRING,
        dataNascimentoResponsavelFinanceiro: Sequelize.STRING,
        rgResponsavelFinanceiro: Sequelize.STRING,
        orgaoEmissorResponsavelFinanceiro: Sequelize.STRING,
        grauParentescoResponsavelFinanceiro: Sequelize.STRING,
        entidadeXOperadora: Sequelize.STRING,
        plano: Sequelize.STRING,
        dataVigenciaMensal: Sequelize.DATE,
        dataVencimentoMensal: Sequelize.DATE,
    },{
        underscored: true,
        freezeTableName: true,
        tableName: 'movimentacao',
    });

    Movimentacao.hasMany(AbrangenciaGeografica);
    Movimentacao.sync({force: true})

    // return Movimentacao;
    module.exports = Movimentacao;
    

// };