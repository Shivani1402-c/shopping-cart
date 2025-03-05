import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { add, remove } from "../redux/slice/cart";
import { Toast } from "primereact/toast";
import { ProductInt } from "../type/type";

const Product: React.FC<{ item: ProductInt }> = ({ item }) => {
  const toast = useRef<Toast>(null);

  const cart = useSelector((state: ProductInt[]) => state);

  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("add to cart");

    dispatch(add(item));
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Item added to your cart successfully!",
      life: 3000,
    });
  };

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.current?.show({
      severity: "warn",
      summary: "Warning",
      detail: "Item removed from your cart!",
      life: 3000,
    });
  };

  return (
    <div className="card border-primary shadow-sm p-3 h-100">
      <div className="text-center">
        <img
          src={item.image}
          alt={item.title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-truncate">{item.title}</h5>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <button
            className={`btn ${
              cart?.length > 0 &&
              cart?.some((p: ProductInt) => p.id === item.id)
                ? "btn-danger"
                : "btn-primary"
            }`}
            onClick={
              cart?.length > 0 && cart?.some((p) => p.id === item.id)
                ? removeFromCart
                : addToCart
            }
          >
            {cart?.length > 0 && cart.some((p) => p.id === item.id)
              ? "Remove Item"
              : "Add to Cart"}
          </button>
          <p className="mb-0 fw-bold">${item.price}</p>
        </div>
      </div>

      <Toast ref={toast} />
    </div>
  );
};

export default Product;
