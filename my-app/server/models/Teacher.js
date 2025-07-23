
module.exports = ( Sequelize, DataTypes ) => {


const Teacher = Sequelize.define(
  'teacher',
  {
    name: {type: DataTypes.STRING },  
    },
    {
      timestamps: false,
    }  )
  
    return Teacher

  }

