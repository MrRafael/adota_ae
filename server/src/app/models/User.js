module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        password_hash: DataTypes.STRING,
        estado: DataTypes.STRING,
        cidade: DataTypes.STRING,
        rua: DataTypes.STRING,
        numero: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return User;
}