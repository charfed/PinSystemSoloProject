
module.exports = ( Sequelize, DataTypes ) => {


const Student = Sequelize.define(
  'student',
  {
    name:     {type: DataTypes.STRING,allowNull: false}, // name of the student
    type:     {type: DataTypes.STRING,allowNull: false}, // type is student
    behavior :{type :DataTypes.STRING,allowNull: false}, // behavior varies depending on the number of pins
    greenPin :{type: DataTypes.INTEGER,allowNull: true}, // class 1 pin , small warning
    bluePin  :{type: DataTypes.INTEGER,allowNull: true}, // class 2 pin , medium warning
    redPin   :{type: DataTypes.INTEGER,allowNull: true}, // class 3 pin , bigger warning // 3 and you are out ...
    },
    {
      timestamps: false,
    }  )
  
    return Student

  }



