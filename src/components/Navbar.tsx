import { Link } from "react-router-dom";
import { MdShoppingBasket } from "react-icons/md";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cart = useSelector((state: any) => state);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4 w-100">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <h1 className="text-primary">Shopping Basket</h1>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-semibold" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item position-relative">
              <Link className="nav-link text-dark fw-semibold" to="/cart">
                <MdShoppingBasket className="fs-4" />
                {cart.length > 0 && (
                  <span className="badge bg-danger position-absolute top-0 start-100 translate-middle rounded-pill">
                    {cart.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
