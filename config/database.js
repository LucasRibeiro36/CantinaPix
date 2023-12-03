import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const sequelize = new Sequelize(
  process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  por: process.env.DATABASE_PORT,
  dialect: process.env.DATABASE_DIALECT || 'mysql',
});
console.log(process.env.DATABASE_NAME,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  process.env.DATABASE_HOST,
  process.env.DATABASE_PORT,
  process.env.DATABASE_DIALECT);
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  } catch (error) {
    console.error('Não foi possível se conectar ao banco de dados:', error);
  }

  try {
    await sequelize.sync({ alter: true });
    console.log('Tabelas criadas com sucesso.');
  } catch (error) {
    console.error('Não foi possível criar as tabelas:', error);
  }
})();

export default sequelize;
