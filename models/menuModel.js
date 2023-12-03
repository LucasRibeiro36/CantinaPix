import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database.js';

const Menu = sequelize.define('menu', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: true
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Menu;