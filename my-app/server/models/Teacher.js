
module.exports = ( Sequelize, DataTypes ) => {


const Teacher = Sequelize.define(
  'teacher',
  {
    name: {type: DataTypes.STRING,allowNull: false}
    },
    {
      timestamps: false,
    }  )
  
    return Teacher
    
  }

