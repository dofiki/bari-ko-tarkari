import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Banner({ onSideBar, sideBarStatus, productList }) {
  const location = useLocation(); // Get current route
  const [activePath, setActivePath] = useState(location.pathname);
  const [showMenu, setShowMenu] = useState(false); // State for hamburger menu

  useEffect(() => {
    setActivePath(location.pathname); // Update activePath when route changes
  }, [location.pathname]);

  const handleHam = () => {
    setShowMenu((prev) => !prev); // Toggle menu visibility
  };

  return (
    <div className="banner">
      <h1 className="logo">Bari Ko Tarkari</h1>
      <div className="navRight">
        <div className="menu">
          <Link to="/home" className={activePath === "/home" ? "active" : ""}>
            <h3>Home</h3>
          </Link>
          <Link to="/products" className={activePath === "/products" ? "active" : ""}>
            <h3>Product</h3>
          </Link>
          <Link to="/about" className={activePath === "/about" ? "active" : ""}>
            <h3>About Us</h3>
          </Link>
        </div>

        <p className="cartBar" onClick={onSideBar}>
          {sideBarStatus ? "close" : "cart"}
          {productList.length === 0 ? "" : <span className="badge">{productList.length}</span>}
        </p>
        
        {/* Hamburger Menu Icon */}
        <p className="ham" onClick={handleHam}>
        {showMenu ? "close" : "menu"}
        </p>
      </div>

      {/* Hamburger Dropdown Menu */}
      {showMenu && (
        <div className="hamMenu">
          <Link to="/home" className={activePath === "/home" ? "active" : ""}>
            <h3>Home</h3>
          </Link>
          <Link to="/products" className={activePath === "/products" ? "active" : ""}>
            <h3>Product</h3>
          </Link>
          <Link to="/about" className={activePath === "/about" ? "active" : ""}>
            <h3>About Us</h3>
          </Link>
        </div>
      )}
    </div>
  );
}
