module.exports = function(sequelize, DataTypes) {
  const ContactType = sequelize.define('ContactType', {
    id: {
      type: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'ref_contact_type',
    timestamps: false
  });

  ContactType.associate = (models) => {
    ContactType.hasMany(models.Contacts, {
      foreignKey: 'type_id',
      as: 'contacts',
    });
  };

  return ContactType;
};
