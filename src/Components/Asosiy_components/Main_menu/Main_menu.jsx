import React from "react";
import "./Main_menu.scss";
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Main_menu = () => {
  return (
    <div className="media_menus">
      <div className="menu">
        <NavLink to={"/"}>
        <IoHomeOutline />
        <p>Бош саҳифа</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/Cart"}>
          <FiShoppingCart className="icon" />
          <p>Корзина</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/Fovorite"}>
          <FaRegHeart className="icon" />
          <p>Избранное</p>
        </NavLink>
      </div>
      <div className="menu">
        <NavLink to={"/Signup"}>
          <FaRegUser className="icon" />
          <p>Войти</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Main_menu;
