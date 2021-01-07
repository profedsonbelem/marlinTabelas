module.exports = (sequelize, DataTypes) => {
        const ContratoBeneficiario = sequelize.define("ContratoBeneficiario", {
                id: DataTypes.INTEGER,
                dataVigencia: DataTypes.STRING,
                dataVencimento: DataTypes.STRING,
                valorTotal: DataTypes.STRING,
                valorTaxaAssociativa: DataTypes.STRING,
                taxaCadastro: DataTypes.STRING,
                valorTotalMensal: DataTypes.STRING,
                numeroProposta: DataTypes.STRING,
                qtdRecorrenciaAnualTaxaAssociativa: DataTypes.STRING,
                descricaoRecorrenciaTaxaAssociativa: DataTypes.STRING,
                id_subcontrato: DataTypes.STRING,
                id_contrato: DataTypes.STRING,
                id_operadora: DataTypes.STRING,
                id_entidade: DataTypes.STRING,
                id_plano: DataTypes.STRING,
                id_titular: DataTypes.STRING,
                id_corretora: DataTypes.STRING,
                id_administradora: DataTypes.BOOLEAN,
                id_corretor: DataTypes.BOOLEAN,
                id_supervisor: DataTypes.INTEGER,
        }, {
                underscored: true,
                freezeTableName: true,
                tableName: 'contrato_beneficiario',
        });

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Subcontrato, {
                        through: 'subcontrato',
                        as: 'subcontrato',
                        foreignKey: 'id_subcontrato',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Contrato, {
                        through: 'contrato',
                        as: 'contratos',
                        foreignKey: 'id_contrato',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Operadora, {
                        through: 'operadora',
                        as: 'operadoras',
                        foreignKey: 'id_operadora',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Entidade, {
                        through: 'entidade',
                        as: 'entidades',
                        foreignKey: 'id_entidade',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Plano, {
                        through: 'plano',
                        as: 'plano',
                        foreignKey: 'id_plano',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Titular, {
                        through: 'titular',
                        as: 'titular',
                        foreignKey: 'id_titular',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Corretora, {
                        through: 'corretora',
                        as: 'corretora',
                        foreignKey: 'id_corretora',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Administradora, {
                        through: 'administradora',
                        as: 'administradora',
                        foreignKey: 'id_administradora',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Corretor, {
                        through: 'corretor',
                        as: 'corretor',
                        foreignKey: 'id_corretor',
                });
        }

        ContratoBeneficiario.associate = function (models) {
                ContratoBeneficiario.belongsTo(models.Supervisor, {
                        through: 'supervisor',
                        as: 'supervisor',
                        foreignKey: 'id_supervisor',
                });
        }

        return ContratoBeneficiario;
};