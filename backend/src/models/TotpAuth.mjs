import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class TotpAuth extends Model {
    static associate(models) {
      TotpAuth.belongsTo(models.User, { foreignKey: 'UserId' });
    }
  }

  TotpAuth.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secret: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'User',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName:'TotpAuth',
    freezeTableName: true,
    tableName: 'totpAuth'
  });

  return TotpAuth;
};
