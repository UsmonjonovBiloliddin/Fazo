import "./Filter_rusult.scss";
import React, { useEffect } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdFilterListAlt } from "react-icons/md";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import PraductService from "../../../Service/ApiService";
import { laptopError, laptopStart, laptopSuccess } from "../../../Slice/laptop";
import { Interest, Models } from "../../../";

const Filter_rusult = ({ id, id2 }) => {
  const { list, filter, filterpraduct } = useSelector((state) => state.laptop);

  const dispatch = useDispatch();

  const getlaptop = async () => {
    dispatch(laptopStart());
    try {
      const response = await PraductService.getProduct(
        `/${id}/${id2}?page=1&limit=25&price=${filter.price}&display=0&brand=${filter.brand}`
      );
      dispatch(laptopSuccess(response.data));
    } catch (error) {
      dispatch(laptopError(error));
    }
  };

  useEffect(() => {
    getlaptop();
  }, [id, filterpraduct]);

  return (
    <div className="Filter_rusult">
      <div className="Filter_boxes  ">
        {list &&
          list.map((item) => {
            return (
              <Link key={item.id} to={`/Filter_inside`}>
                <div className="Filter_box">
                  <div className="img">
                    <img src="../imegs/Rectangle 24.png" alt="" />
                  </div>
                  <div className="price">
                    <h3>{item.price}сум/мес</h3>
                    <p>{item.discount_price} сум</p>
                  </div>
                  <div className="name">
                    <h2> {item.name} </h2>
                  </div>

                  <div className="shop">
                    <FiShoppingCart />
                    <hr />
                    <FaRegHeart />
                    <hr />
                    <MdFilterListAlt />
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <div className="bottom">
        <div className="button">
          <button>Показать еще</button>
        </div>
        <Pagination total={1000} />
      </div>
      <Models />
      <Interest />
    </div>
  );
};

export default Filter_rusult;
