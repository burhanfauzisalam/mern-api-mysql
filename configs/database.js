import { Sequelize } from "sequelize";
 
const db = new Sequelize('db_mern_api', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;