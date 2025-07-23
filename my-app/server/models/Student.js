
module.exports = ( Sequelize, DataTypes ) => {


const Student = Sequelize.define(
  'student',
  {
    name: {type: DataTypes.STRING,allowNull: false},
    type: {type: DataTypes.STRING,allowNull: false},
    greenPin :{type: DataTypes.INTEGER,allowNull: true},
    bluePin  :{type: DataTypes.INTEGER,allowNull: true},
    redPin   :{type: DataTypes.INTEGER,allowNull: true},
    },
    {
      timestamps: false,
    }  )
  
    return Student

  }



