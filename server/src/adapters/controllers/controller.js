import express from "express";
const app = express();
import { connection } from "../../frameworks/database/connection.js";

/**
 * 
 * @param  app- Dependency injection of express app object
 * 
**/
 
const route = (app) => {

  app.post("/add-products", (req, res) => {
    const cmd = `CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(200) NOT NULL)`;
    connection.query(cmd, (err, results) => {
      if (err) {
        console.error(`error creating table`, err);
        return;
      }
      const user_val = `jogn`;
    });
  });
  app.get("/", (req, res) => {
    const insert = `SELECT * FROM test.products;`;
    connection.query(insert, async (ins_err, result) => {
      if (ins_err) {
        res.status(500).json({
          error: "Internal server error",
        });
      } else {
        res.status(200).json({
          sucesss: "successfully listed products",
          data: result,
        });
      }
    });
  });

  app.post("/add-to-cart/:id", (req, res) => {
    const pro_id = req.params.id;

    const cal_dis = () => {
      const products_query = `SELECT * FROM test.products;`;
      connection.query(products_query, async (aoc_err, result) => {
        if (aoc_err) {
          console.log("error", aoc_err);
        } else {
          // const products_table = result.map((row) => {
          //   return row;
          // });
        }
      });
    };

    cal_dis();

    const AOC = `INSERT INTO cart (idcart,cart_items) VALUES(${pro_id},1)`;

    connection.query(AOC, async (aoc_err, result) => {
      if (aoc_err) {
        res.status(500).json({
          error: "Internal server error",
        });
      } else {
        res.status(200).json({
          sucesss: "added to cart",
        });
      }
    });
  });

  app.get("/cart-items", (req, res) => {
    const Cmd = `select * from cart join products on cart.idcart = products.product_id;`;
    connection.query(Cmd, (cmd_err, result) => {
      if (cmd_err) {
        res.status(500).json({
          error: "Internal server error",
        });
      } else {
        res.status(200).json({
          sucesss: "added to cart",
          data: result,
        });
      }
    });
  });
};

export default route;

function calculate_percent_dis(og_price, dis_prcnt) {
  const disAmount = (dis_prcnt / 100) * og_price;
  const discountedLastPrice = og_price - disAmount;
  return { discountAmount: disAmount, discountPrice: discountedLastPrice };
}
// const og_pc = 100;
// const dis_prcnt = 30;
// const result = calculate_percent_dis(og_pc, dis_prcnt);
// console.log(
//   `how much discounted`,
//   result.discountAmount,
//   `discountedLastPrice`,
//   result.discountPrice
// );

const cal_flat = (og_price, flat_amount) => og_price - flat_amount;
const finalPrice = cal_flat(100, 50);
