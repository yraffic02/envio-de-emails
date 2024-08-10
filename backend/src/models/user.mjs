import { Model } from 'sequelize';
import bcrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init({
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
    user.password = await bcrypt.hash(user.password, 10).then((hash) => {
      return hash;
    });
  });

  User.beforeUpdate(async (user) => {
    if (user.changed('password')) {
      user.password = await bcrypt.hash(user.password, 10).then((hash) => {
        return hash;
      });
    }
  });

  User.addScope('defaultScope', {
    attributes: { exclude: ['password'] },
  }, { override: true });

  return User;
};


