module.exports = (sequelize, DataTypes) => {
    const Titular = sequelize.define("Titular", {
        id: DataTypes.INTEGER,
        cpf: DataTypes.STRING,
        rg: DataTypes.STRING,
        nome: DataTypes.STRING,
        dataNascimento: DataTypes.STRING,
        nomeMae: DataTypes.STRING,
        sexo: DataTypes.STRING,
        cns: DataTypes.STRING,
        dnv: DataTypes.STRING,
        email: DataTypes.STRING,
        dddTelefone: DataTypes.STRING,
        numTelefone: DataTypes.STRING,
        dddCelular: DataTypes.STRING,
        numCelular: DataTypes.STRING,
        valor: DataTypes.STRING,
        idade: DataTypes.STRING,
        numeroCarteirinha: DataTypes.STRING,
        representanteLegal: DataTypes.BOOLEAN,
        carencia: DataTypes.BOOLEAN,
        id_estadoCivil: DataTypes.INTEGER,
        id_orgaoEmissor: DataTypes.INTEGER,
        id_endereco: DataTypes.INTEGER,
        id_dependente: DataTypes.INTEGER,
        id_profissao: DataTypes.INTEGER,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'titular',
    });

    Titular.associate = function (models) {
        Titular.belongsTo(models.EstadoCivil, {
            through: 'estado_civil',
            as: 'estadoCivil',
            foreignKey: 'id_estadoCivil',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.OrgaoEmissor, {
            through: 'orgao_emissor',
            as: 'orgaoEmissor',
            foreignKey: 'id_orgaoEmissor',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.Endereco, {
            through: 'endereco',
            as: 'endereco',
            foreignKey: 'id_endereco',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsToMany(models.Dependente, {
            through: 'dependente',
            as: 'dependente',
            foreignKey: 'id_dependente',
        });
    }

    Titular.associate = function (models) {
        Titular.belongsTo(models.Profissao, {
            through: 'profissao',
            as: 'profissao',
            foreignKey: 'id_profissao',
        });
    }

    

    return Titular;
};