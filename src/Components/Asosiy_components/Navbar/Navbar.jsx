import { Link, NavLink } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { TiMicrophoneOutline } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import { Select } from "antd";

import "./Navbar.scss";
import { useState } from "react";

const Navbar = () => {

  const [searchinfo , setSearchinfo] = useState()

  const valyu = (e) => {
    setSearchinfo(e);
    searchinfo()
  };

  const catigories = [
    `Моноблоки`,
    `Телефоны, планшеты`,
    `Ноутбуки`,
    `Оргтехника`,
    `Наши магазины`,
  ];

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">
          <Link to={"/"}>
            <img src="../imegs/Logo.png" alt="" />
          </Link>
        </div>

        <div className="Search">
          <form action="#">
            <Select
              placeholder="Все категории"
              style={{
                width: "150px",
                height: "42px",
                border: "1px solid transparent",
                outline: "none",
              }}
            >
              {catigories &&
                catigories.map((catigory, index) => {
                  return (
                    <Select.Option
                      style={{ border: "none" }}
                      key={index}
                      value={catigory}
                    >
                      {catigory}
                    </Select.Option>
                  );
                })}
            </Select>

            <div className="SearchInput">
              <input
                onChange={(e) => valyu(e.target.value)}
                type="text"
                placeholder=" Телефоны и бытовая "
              />
              <TiMicrophoneOutline className="Microphone" />
            </div>
            <div>
              <Link to={`/search/${searchinfo}`}>
                <button >
                  <BiSearch />
                  Поиск
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className="Cantact">
          <NavLink to={"/Login"}>
            <FaRegUser className="icon" />
            <p>Войти</p>
            {/* <div className="quantity"><p>3</p></div> */}
          </NavLink>

          <NavLink to={"/Filter"}>
            <LiaBalanceScaleRightSolid className="icon" />
            <p>Сравнение</p>
             {/* <div className="quantity"><p>3</p></div> */}
          </NavLink>

          <NavLink to={"/Fovorite"}>
            <FaRegHeart className="icon" />
            <p>Избранное</p>
             {/* <div className="quantity"><p>3</p></div> */}
          </NavLink>

          <NavLink to={"/Cart"}>
            {" "}
            <FiShoppingCart
              onClick={() => setCartshop(!cartshop)}
              className="icon"
            />
            <p>Корзина</p>
             <div className="quantity"><p>3</p></div>
          </NavLink>
        </div>

        <div className="Media">
          <Link>
            <IoCallOutline />
          </Link>
          <div className="regions">
            <p>
              <CiLocationOn />
              Ташкент
            </p>

            <div className="select">
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
              <Link>
                <h3>FarGona</h3>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
