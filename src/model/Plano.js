module.exports = (sequelize, DataTypes) => {
    const Plano = sequelize.define("Plano", {
        id: DataTypes.INTEGER,
        nome: DataTypes.STRING,
        codigoANS: DataTypes.STRING,
        adicionais: DataTypes.STRING,
        formacaoDePreco: DataTypes.STRING,
        quantidadeVidas: DataTypes.STRING,
        valorTotal: DataTypes.STRING,
        valorTotalTabela: DataTypes.STRING,
        recorrenciaPromocaoMeses: DataTypes.STRING,
        indPromocional: DataTypes.BOOLEAN,
        indPossuiOpcional: DataTypes.BOOLEAN,
        id_tipoContratacao: DataTypes.STRING,
        id_acomodacao: DataTypes.STRING,
        id_fatorModerador: DataTypes.STRING,
        id_cobertura: DataTypes.STRING,
        id_areaAtuacao: DataTypes.BOOLEAN,
        id_abrangenciaGeografica: DataTypes.BOOLEAN,
        id_operadora: DataTypes.INTEGER,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'plano',
    });


    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.TipoContratacao, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_tipoContratacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.Acomodacao, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_acomodacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'tipo_contratacao',
            as: 'tipoContratacao',
            foreignKey: 'id_fatorModerador',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'cobertura',
            as: 'cobertura',
            foreignKey: 'id_cobertura',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'area_atuacao',
            as: 'areaAtuacao',
            foreignKey: 'id_areaAtuacao',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'abrangencia_geografica',
            as: 'abrangenciaGeografica',
            foreignKey: 'id_abrangenciaGeografica',
        });
    }

    Plano.associate = function (models) {
        ContratoBeneficiario.belongsTo(models.FatorModerador, {
            through: 'operadora',
            as: 'operadora',
            foreignKey: 'id_operadora',
        });
    }

    return Plano;
};