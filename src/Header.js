import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./Firebase";

function Header() {
  const [{ user, basket }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <>
      <div className="header">
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
            alt=""
            className="header__logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="nav-item">
              <span className="nav-item-lineOne">Hello Guest</span>
              <span className="nav-item-lineTwo">
                {user ? "Sign out" : "Sign in"}
              </span>
            </div>
          </Link>
          <div className="nav-item">
            <span className="nav-item-lineOne">Return</span>
            <span className="nav-item-lineTwo">& Orders</span>
          </div>
          <div className="nav-item">
            <span className="nav-item-lineOne">Your</span>
            <span className="nav-item-lineTwo">Prime</span>
          </div>
          <div className="nav-item">
            <span className="nav-item-lineOne"></span>
            <span className="nav-item-lineTwo"></span>
          </div>
          <Link to="/checkout">
            <div className="nav-item_basket">
              <ShoppingBasketIcon />
              <span className="nav-item-lineTwo nav-item_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
