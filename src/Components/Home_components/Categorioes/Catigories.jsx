import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { BarsOutlined } from "@ant-design/icons";
import { BiSearch } from "react-icons/bi";
import { HiBars3 } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import Modal_media from "./Modal_media/Modal_media";
import "./Catigories.scss";
import PraductService from "../../../Service/ApiService";
import { OpenBars } from "../../../Slice/barsSlice";

const Catigories = () => {
  const [categories, setCategories] = useState(false);
  const dispatch = useDispatch();
  const [items, setItems] = useState();

  const getApi = async () => {
    try {
      const response = await PraductService.getProduct(
        `categories/get_categories`
      );
      
      setItems(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="Catigories">
      <Modal categories={categories} />
      <Modal_media categories={categories} setCategories={setCategories} />

      <div className="catigories">
        <button onClick={() => setCategories(!categories)}>
          <BarsOutlined />
          <p>Категории</p>
        </button>
        <ul>
          {items &&
            items.map((item) => (
              <li key={item.name}>
                <NavLink to={`/Category${item.link}`}>{item.name}</NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className="catigories_media">
        <button onClick={() => dispatch(OpenBars())}>
          <HiBars3 />
        </button>

        <div className="media-search">
          <div className="Search">
            <form action="#">
              <input type="text" placeholder="Телефоны и бытовая" />
              <div>
                <Link to={"/search"}>
                  <button>
                    <BiSearch />
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>

        <div className="buttons">
          <button onClick={() => setCategories(!categories)}>
            <BarsOutlined />
            <p>Категории</p>
          </button>
        </div>
        {/* <ul>
          <li> 
            <NavLink to={"/jgfsdhgfw"}>Наши магазины</NavLink>
          </li>
          <li>
            <NavLink to={"/jgfsdhgfw"}>Моноблоки</NavLink>
          </li>
          <li>
            <NavLink to={"/ashdasyig"}>Телефоны, планшеты</NavLink>
          </li>
          <li>
            <NavLink to={"/jagvgjsvda"}>Ноутбуки</NavLink>
          </li>
          <li>
            <NavLink to={"/asdaffs"}>Комплектующие</NavLink>
          </li>
          <li>
            <NavLink to={"/asedfg"}>Сетевое оборудование</NavLink>
          </li>
          <li>
            <NavLink to={"/uwsjnx"}>Оргтехника</NavLink>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default Catigories;
