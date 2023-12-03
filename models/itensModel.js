import { DataTypes } from 'sequelize';
import {sequelize} from '../config/database.js';

const Itens = sequelize.define('itens', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Itens;