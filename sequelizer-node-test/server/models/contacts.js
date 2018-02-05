/** 
 * Contact is the entity that allows the register of 
 * a person that the customer or the community can refer to
 */
module.exports = function(sequelize, DataTypes) {
  const Contact =  sequelize.define('Contacts', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    community_id: {
      type: DataTypes.UUIDV4,
      allowNull: true
    },
    type_id: {  
      type: DataTypes.UUIDV4,
      allowNull: true
    }
  }, {
    tableName: 'contact',
    timestamps: false
  });

  Contact.associate = (models) => {
    Contact.belongsTo(models.ContactType, {
      foreignKey: 'type_id',
      onDelete: 'CASCADE',
    });
  };
  return Contact;
};
