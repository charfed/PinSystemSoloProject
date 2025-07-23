
module.exports = ( Sequelize, DataTypes ) => {


const Student = Sequelize.define(
  'student',
  {
    name:     {type: DataTypes.STRING,allowNull: false}, // name of the student
    type:     {type: DataTypes.STRING,allowNull: false}, // type is student
    picture : {type: DataTypes.STRING,allowNull: false}, // picture of the student
    sex     : {type: DataTypes.STRING,allowNull: false},
    // these are variable so I'll make them 
    behavior :{type :DataTypes.STRING}, // behavior varies depending on the number of pins
    greenPin :{type: DataTypes.STRING},  // class 1 pin , small warning
    bluePin  :{type: DataTypes.STRING},  // class 2 pin , medium warning
    redPin   :{type: DataTypes.STRING},  // class 3 pin , bigger warning // 3 and you are out ...
    },
    {
      timestamps: false,
    }  )
  
    return Student

  }



