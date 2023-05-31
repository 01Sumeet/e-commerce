import "./Header.css";
import image from "./Soul-Eater-STORE-logo-2-1.png";
import {
  House,
  Info,
  ShoppingCartSimple,
  Wrench,
  SignIn,
  Package,
  MagnifyingGlass,
} from "phosphor-react";
import InputField from "../../Assets/InputField";
export const Header = () => {
  return (
    <>
      <div className="PageContainer">
        <div className="navContainer">
          <div className="navBar">
            <img className="logoImg" src={image} alt="" />{" "}
            <MagnifyingGlass
              className="searchIcons icons"
              size={25}
              weight="bold"
            />
            <InputField
              name="search"
              className="search"
              type="text"
              placeholder="Search"
            />
            <ul className="List">
              <li className="list-item">
                <House className="icons" size={20} weight="bold" /> Home
              </li>
              <li className="list-item">
                <Info className="icons" size={20} weight="bold" /> About
              </li>
              <li className="list-item">
                <Wrench className="icons" size={20} weight="bold" /> Services
              </li>
              <li className="list-item">
                <Package className="icons" size={20} weight="bold" /> Products
              </li>
              <li className="list-item">
                <SignIn className="icons" size={20} weight="bold" />{" "}
                Login/Register
              </li>
              <li className="list-item">
                <ShoppingCartSimple className="icons" size={20} weight="bold" />{" "}
                Cart
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
