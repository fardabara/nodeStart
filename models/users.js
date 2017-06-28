module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            field: 'id'
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'user_name'
        },
        password: {
            type: DataTypes.STRING,
            allowNull: true,
            field: 'password'
        },
        createdAt: {
            type:DataTypes.DATE,
            allowNull: true,
            field: 'created_at'
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
            field: 'updated_at'
        }
    },{
        tableName: 'users',
        timestamps: true,
        classMethods: {
            associate: function (models) {
            },
        },
        instanceMethod: {}
    });
};