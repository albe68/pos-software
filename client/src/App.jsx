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
        setProducts(response.data.data);
      })
      .catch((err) => console.error(`Error fetching data ${err}`));

    axios
      .get("http://localhost:8080/cart-items")
      .then((response) => {
        setCartItems(response.data.data);
      })
      .catch((err) => console.error(`Error fetching data ${err}`));
  }, []);

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src="https://growxcd.com/wp-content/uploads/2022/03/WhatsApp-Image-2022-02-01-at-10.25.11-AM-1.jpeg" />
        </div>
        <div className="logo">
          <img />
        </div>
      </div>

      <div className="container">
        <div className="nav">
          <div className="products">
            {products.map((lo) => (
              <div className="single" color="red" key={lo}>
                <img src="https://img.freepik.com/free-photo/front-view-smiley-woman-with-fireworks_52683-98180.jpg?w=996&t=st=1705214877~exp=1705215477~hmac=e3a8d2027b3338094d0d15e92ef80d81d76cc06a0f96ae5cd680ef40e127b21b"></img>
                <p1>{lo.product_name}</p1>
              </div>
            ))}
          </div>
          <div className="atc">
            <p>Cart</p>
            <div className="jin">
              {cartItems.map((c) => (
                <div className="sn" key={c}>
                  <p style={{ marginBottom: "10px" }}>{c.product_name} x 1</p>
                  <p>₹{c.product_price}</p>
                </div>
              ))}
              <div className="total-cart">
                <p>Total</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
