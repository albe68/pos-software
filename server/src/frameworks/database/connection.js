import { createConnection } from "mysql2";
import "dotenv/config";
const password = process.env.PASSWORD;
export const connection = createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: password,
  database: "test",
});

const dbConnection = () => {
  connection.connect((err) => {
    if (err) {
      console.log(`${err}`);
      return;
    } else {
      console.log(`db connected`);
    }
  });
};

export default dbConnection;
