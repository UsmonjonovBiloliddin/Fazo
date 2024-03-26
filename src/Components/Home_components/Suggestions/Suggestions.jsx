import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import "./Suggestions.scss";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
import PraductService from "../../../Service/ApiService";
const Suggestions = () => {

  const [boxs, setBoxs] = useState();
  const getApi = async () => {
    try {
      const response = await PraductService.getProduct(`categories/get_all_source?page=1&limit=25`);

      setBoxs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApi();
  }, []);
 

  return (
    <div className="Suggestions">
      <div className="Suggestions_text ">
        <h2>Горящие предложения</h2>
        <Link>
          <p>
            Посмотреть все <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <div className="Suggestions_boxes ">
        {boxs &&
          boxs.map((box) => (
            <div key={box.id} className="Suggestions_box">
              <div className="discount">
                <p>-{box.discount}%</p>
              </div>

              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>
                  <del>1 373 000 сум</del> <hr /> <span>1 304 000 сум</span>
                </h3>
              </div>
              <div className="name">
                <h2>{box.name}</h2>
              </div>
              <div className="date">
                <div className="text">
                  <p>Предложение заканчивается через:</p>
                </div>
                <div className="time">
                  <div className="a">
                    <h5>27</h5> <span>ДНЕЙ</span>
                  </div>{" "}
                  <hr />{" "}
                  <div className="a">
                    <h5>27</h5> <span>ДНЕЙ</span>
                  </div>{" "}
                  <hr />{" "}
                  <div className="a">
                    <h5>27</h5> <span>ДНЕЙ</span>
                  </div>{" "}
                  <hr />{" "}
                  <div className="a">
                    <h5>27</h5> <span>ДНЕЙ</span>
                  </div>{" "}
                </div>
              </div>
              <div className="shop">
                <FiShoppingCart />
                <hr />
                  {
                    <FaHeart  />
                  }
                 
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Suggestions;
