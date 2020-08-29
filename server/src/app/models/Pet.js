module.exports = (sequelize, DataTypes) => {
    const Pet = sequelize.define("Pet", {
        nome: DataTypes.STRING,
        raca: DataTypes.STRING,
        idade: DataTypes.STRING,
        peso: DataTypes.STRING,
        user_id: DataTypes.INTEGER
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return Pet;
}