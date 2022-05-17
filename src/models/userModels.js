import { Sequelize } from 'sequelize';
import sequelize from '../db.js';
import db from '../db.js';

export default db.define('user', {
    email: {
        type: sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }


})