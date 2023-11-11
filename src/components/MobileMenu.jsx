import { slide as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"
var styles = {
  bmBurgerButton: {
    position: "fixed",
    width: "36px",
    height: "30px",
    left: "10px",
    top: "10px",
  },
  bmBurgerBars: {
    background: "#fff",
  },
  bmBurgerBarsHover: {
    background: "white",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",
  },
  bmMenu: {
    background: "#373a47",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmItem: {
    display: "block",
    padding:"10px 0"
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
  },
};
const MobileMenu = () => {
  const showSettings = (e) => {
    e.preventDefault();
    alert();
  };
  return (
    <div className="md:hidden">
      <Menu styles={styles}>
        {/* logo  */}
        <div className="flex">
          <div className="mb-3">
            <p className="text-2xl font-bold">Bistro Boss</p>
          </div>
        </div>
        <p>
          <NavLink id="home" className="menu-item" to="/">
            Home
          </NavLink>
        </p>
        <p>
          <NavLink id="about" className="menu-item" to="/contact">
            CONTACT US
          </NavLink>
        </p>
        <p>
          <NavLink id="contact" className="menu-item" to="/dashboard">
            DASHBOARD
          </NavLink>
        </p>
        <p>
          <NavLink id="contact" className="menu-item" to="/menu">
            OUR MENU
          </NavLink>
        </p>
        <p>
          <NavLink id="contact" className="menu-item" to="/shop">
            OUR SHOP
          </NavLink>
        </p>
        <p>
          <NavLink id="contact" className="menu-item" to="/cart">
            CART
          </NavLink>
        </p>
        <p>
          <NavLink id="contact" className="menu-item" to="/user">
            USER
          </NavLink>
        </p>
        <p>
          <NavLink
            onClick={showSettings}
            className="menu-item--small"
            to="/settings"
          >
            Settings
          </NavLink>
        </p>
      </Menu>
    </div>
  );
};

export default MobileMenu;
