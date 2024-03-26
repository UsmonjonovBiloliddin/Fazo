import React, { useEffect, useState } from "react";
import "./recommend.scss";
import { FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
const Recommend = () => {
  const [Heart, setHeart] = useState(false);
  return (
    <div className="Recommend">
      <div className="Recommend">
        <div className="Recommend_textr ">
          <h2>Рекомендуем</h2>
          <Link>
            {" "}
            <p>
              Посмотреть все <FaArrowRightLong />
            </p>
          </Link>
        </div>

        <div className="block">
          <div className="left ">
            <img src="../imegs/left 1.png" alt="" />
          </div>
          <div className="Recommend_boxes  ">
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
            <div className="Recommend_box">
              <div className="img">
                <img src="../imegs/1.jpg" alt="" />
              </div>
              <div className="price">
                <h3>458 000 сум/мес</h3>
                <p>1 373 000 сум</p>
              </div>
              <div className="name">
                <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
              </div>

              <div className="shop">
                <FiShoppingCart />
                <hr />
                {Heart ? (
                  <FaHeart color="red" onClick={() => setHeart(!Heart)} />
                ) : (
                  <FaRegHeart onClick={() => setHeart(!Heart)} />
                )}
                <hr />
                <LiaBalanceScaleRightSolid />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommend;
