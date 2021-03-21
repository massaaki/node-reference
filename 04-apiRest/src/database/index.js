import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import User from '../models/User';
import Student from '../models/Student';

const models = [Student, User];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
