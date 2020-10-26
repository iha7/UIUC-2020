module.exports = (sequelize, Sequelize) => {
    const Data = sequelize.define("data", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Data;
  };