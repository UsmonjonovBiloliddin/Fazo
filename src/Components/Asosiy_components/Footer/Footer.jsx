import React from "react";
import "./Footer.scss";
import { Link, NavLink } from "react-router-dom";
import { IoLogoInstagram } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="cantact">
        <div className="logo">
          <Link>
            <img src="../imegs/FooterLogo.png" alt="" />
          </Link>
        </div>
        <p>График работы колл-центра Понедельник - Суббота: 9:00–18:00</p>
        <Link to={"tel:+998 91 040 64 78"}>
          <p>Колл-центр: + 998 (71) 205-93-93</p>
        </Link>
        <div className="networks">
          <Link to={"https://t.me/joblinkuz"}>
            {" "}
            <div className="radio">
              {" "}
              <FaTelegramPlane />
            </div>
          </Link>
          
          <Link to={"https://www.instagram.com/creative_6478_"}>
          <div className="radio">
            <IoLogoInstagram />
          </div>
          </Link>
          <div className="radio">
            <FaFacebook />
          </div>
          
          <Link to={"https://youtu.be/ourx2BkT6sk?si=dL67fxUC33Gsfesa"}>
          <div className="radio">
            <FaYoutube />
          </div>
          </Link>
        </div>
      </div>
      <div className="data">
        <div className="cotegoty menu">
          <h3>Категории</h3>
          <ul>
            <NavLink>
              <li>Ноутбуки</li>
            </NavLink>
            <NavLink>
              <li>Игровые кресла</li>
            </NavLink>
            <NavLink>
              <li>Телефоны</li>
            </NavLink>
            <NavLink>
              <li>Моноблоки</li>
            </NavLink>
            <NavLink>
              <li>Модули памяти</li>
            </NavLink>
          </ul>
        </div>
        <div className="all menu">
          <h3>Общее</h3>
          <ul>
            <NavLink>
              <li>Новости</li>
            </NavLink>
            <NavLink>
              <li>О нас</li>
            </NavLink>
            <NavLink>
              <li>Наши магазины</li>
            </NavLink>
            <NavLink>
              <li>Политика конфиденциальности</li>
            </NavLink>
            <NavLink>
              <li>Правила программы лояльности</li>
            </NavLink>
            <NavLink>
              <li>Контакты</li>
            </NavLink>
          </ul>
        </div>
        <div className="For buyers menu">
          <h3>Покупателям</h3>
          <ul>
            <NavLink>
              <li>Покупка в рассрочку</li>
            </NavLink>
            <NavLink>
              <li>Доставка и оплата</li>
            </NavLink>
            <NavLink>
              <li>Правила покупок с cashback</li>
            </NavLink>
            <NavLink>
              <li>Возврат / Обмен</li>
            </NavLink>
            <NavLink>
              <li>Правила пользования купонами</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
