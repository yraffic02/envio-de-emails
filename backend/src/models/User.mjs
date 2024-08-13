import bcrypt from 'bcrypt';
import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.TotpAuth)
    }
  }

  User.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name:{ 
      type: DataTypes.STRING,
      allowNull: true
    },
    email:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    totp: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });

  User.beforeCreate(async (user) => {
    user.password = await bcrypt.hash(user.password.toString(), 10);
  });

  User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password.toString(), 10);
    }
  });

  User.addScope('defaultScope', {
    attributes: { exclude: ['password'] },
  }, { override: true });

  return User;
};


