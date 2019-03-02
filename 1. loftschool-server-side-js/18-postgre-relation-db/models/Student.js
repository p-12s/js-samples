module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('student', {
    name: {
      type: DataTypes.STRING
    }
  })
  Student.associate = function (models) {
    Student.belongsTo(models.teacher) // 1 преподаватель
  }
  return Student
}