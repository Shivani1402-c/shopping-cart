import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import { BiTrash } from "react-icons/bi";
import { remove } from "../redux/slice/cart";
import { Toast } from "primereact/toast";

const CartItem: React.FC<{ item: any }> = ({ item }) => {
  const toast = useRef<Toast>(null);

  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(remove(item.id));
    toast.current?.show({
      severity: "warn",
      summary: "Warn",
      detail: "Item removed from your cart!",
      life: 3000,
    });
  };

  return (
    <div className="d-flex align-items-center justify-content-between bg-light p-3 rounded shadow-sm mt-2">
      {/* Image and Item Info */}
      <div className="d-flex align-items-center">
        <img
          src={item.image}
          className="rounded"
          alt=""
          style={{ height: "100px", width: "auto" }}
        />
        <div className="ms-3">
          <h5 className="text-primary fw-bold">{item.title}</h5>
          <p className="mb-0 text-secondary">${item.price}</p>
        </div>
      </div>

      {/* Delete Button */}
      <button
        className="btn btn-outline-danger rounded-circle p-2"
        onClick={removeItemFromCart}
      >
        <BiTrash />
      </button>

      <Toast ref={toast} />
    </div>
  );
};

export default CartItem;
