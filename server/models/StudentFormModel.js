module.exports = (sequelize, DataTypes) => {
  const StudentFormModel = sequelize.define(
    "Student",
    {
      studentName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      course: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      remarks: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: true, // Add timestamps
      underscored: true, // Use underscored naming (createdAt, updatedAt)
    }
  );

  return StudentFormModel;
};
