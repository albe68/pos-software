import express from "express";
const app = express();
import { connection } from "../../frameworks/database/connection.js";
//app doesnt working if directly implemented in to this function

//remove items from cart
//search products
const route = (app) => {
  app.post("/add-products", (req, res) => {
    const cmd = `CREATE TABLE IF NOT EXISTS users (id INT AUTO_INCREMENT PRIMARY KEY,username VARCHAR(200) NOT NULL)`;
    connection.query(cmd, (err, results) => {
      if (err) {
        console.error(`error creating table`, err);
        return;
      }
      console.log(`first`);

      const user_val = `jogn`;
    });
  });
  app.get("/", (req, res) => {
    console.log(`hhh`);
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
    // const applicableOffers = getApplicableOffers();
    // function getOffersFromDB() {
    //   //fetch offers from db
    // }

    const cal_dis = () => {
      const prctg = `SELECT dis_type FROM test.products;`;
      connection.query(prctg, async (aoc_err, result) => {
        if (aoc_err) {
          console.log("error", aoc_err);
        } else {
          const disType = result.map((row) => row.dis_type);
          console.log(`Result`, disType);
          //  Result [ 'prctg', 'flat', 'bogo' ]
        }
      });
    };

    cal_dis();

    // const AOC = `INSERT INTO cart (idcart,cart_items) VALUES(${pro_id},1)`;

    // connection.query(AOC, async (aoc_err, result) => {
    //   if (aoc_err) {
    //     res.status(500).json({
    //       error: "Internal server error",
    //     });
    //   } else {
    //     res.status(200).json({
    //       sucesss: "added to cart",
    //     });
    //   }
    // });
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
