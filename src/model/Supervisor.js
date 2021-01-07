module.exports = (sequelize, DataTypes) => {
    const Supervisor = sequelize.define("Supervisor", {
        id: DataTypes.INTEGER,
        id_corretor: DataTypes.INTEGER,
        id_corretora: DataTypes.INTEGER,
    }, {
        underscored: true,
        freezeTableName: true,
        tableName: 'supervisor',
    });

    Supervisor.associate = function (models) {
        Supervisor.belongsToMany(models.Corretor, {
            through: 'corretor',
            as: 'corretor',
            foreignKey: 'id_corretor',
        });
    }

    Supervisor.associate = function (models) {
        Supervisor.belongsToMany(models.Corretora, {
            through: 'corretora',
            as: 'corretora',
            foreignKey: 'id_corretora',
        });
    }

    return Supervisor;
};