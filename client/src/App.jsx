import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

//use swal for add to cart

function handleClick(id) {}
function App() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/")
      .then((response) => {
        console.log("products", ...response.data.data);
        setProducts(response.data.data);
      })
      .catch((err) => console.error(`Error fetching data ${err}`));

      axios
      .get("http://localhost:8080/cart-items")
      .then((response) => {
        console.log("cartItems", ...response.data.data);
        setCartItems(response.data.data);
      })
      .catch((err) => console.error(`Error fetching data ${err}`));
  }, []); 
  
  cartItems.forEach((item) => {
    console.log(`ID: ${item.idcart}, Name: ${item.product_name}, Price: ${item.product_price}`);
  });

  const numb = [1, 2, 3, 4, 5, 6];
  const items1 = [1, 2, 3, 4, 5];
  // const json = [
  //   { prod_name: "orange", prod_price: 300 },
  //   { prod_name: "orange", prod_price: 300 },
  // ];

  return (
    <>
      <div className="container">
        <div className="products">
          {products.map((lo) => (
            <div className="single" color="red" key={lo}>
              {console.log(`lollllll`, lo)}
              <img src="https://img.freepik.com/free-photo/front-view-smiley-woman-with-fireworks_52683-98180.jpg?w=996&t=st=1705214877~exp=1705215477~hmac=e3a8d2027b3338094d0d15e92ef80d81d76cc06a0f96ae5cd680ef40e127b21b"></img>
            </div>
          ))}
        </div>
        <div className="atc">
          <p>Cart</p>
          <div className="jin">
            {cartItems.map((c) => (
              <div className="sn" key={c}>
              {console.log(`NANNANA`,c)}
              <h6>Example heading </h6>
                <p>{c.product_name}</p>
                <p>{c.product_price}</p>
              </div>
            ))}
            <div className="button">
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
