import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./cheaper.scss";
import { FaHeart } from "react-icons/fa";
import { LiaBalanceScaleRightSolid } from "react-icons/lia";
const Cheaper = () => {
  const [Heart, setHeart] = useState(false);
  return (

    <div className="Cheaper">
      <div className="Cheaper_text ">
        <h2>Товары дешевле:</h2>
        <Link>
          <p>
            Посмотреть все <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <div className="Cheaper_boxes ">
        <div className="Cheaper_box">
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
        <div className="Cheaper_box">
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
        <div className="Cheaper_box">
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
        <div className="Cheaper_box">
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
  );
};

export default Cheaper;
