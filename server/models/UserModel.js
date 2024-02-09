// models/UserModel.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      // Add other user attributes as needed
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: true, // Add timestamps
      underscored: true, // Use underscored naming (createdAt, updatedAt)
    }
  );

  return User;
};
