import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CartItem from "../components/CartItem ";
import { ProductInt } from "../type/type";

const Cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const cart = useSelector(
    (state: { [key: string]: ProductInt[] }) => state.cart
  );

  useEffect(() => {
    if (cart?.length > 0)
      setTotalAmount(
        cart.reduce((acc: any, curr: { price: any }) => acc + curr.price, 0)
      );
  }, [cart]);

  return (
    <div className="container min-vh-80 py-4">
      {cart.length > 0 ? (
        <div className="row g-4">
          {/* Cart Items Section */}
          <div className="col-md-7">
            {cart.map((item: any) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          {/* Cart Summary Section */}
          <div className="col-md-5">
            <div className="card shadow p-4">
              <h3 className="text-primary fw-bold">Your Cart Summary</h3>
              <p className="fw-semibold text-secondary mt-3">
                <span className="fw-bold">Total Items:</span> {cart.length}
              </p>
              <p className="fw-semibold text-secondary">
                <span className="fw-bold">Total Amount:</span> ${totalAmount}
              </p>
              <button className="btn btn-primary w-100 mt-3">
                Checkout Now
              </button>
            </div>
          </div>
        </div>
      ) : (
        // Empty Cart Section
        <div className="d-flex flex-column align-items-center justify-content-center min-vh-80">
          <h4 className="text-secondary fw-bold">Your cart is empty!</h4>
          <Link to={"/"}>
            <button className="btn btn-primary mt-3">SHOP NOW</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
