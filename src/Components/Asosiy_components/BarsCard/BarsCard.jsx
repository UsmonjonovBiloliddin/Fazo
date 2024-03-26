import React from "react";
import "./BarsCard.scss";
import { MdClose } from "react-icons/md";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsJournalBookmark } from "react-icons/bs";
import { GiCardExchange } from "react-icons/gi";
import { LiaCommentsDollarSolid } from "react-icons/lia";
import { LuWallet } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { OpenBars } from "../../../Slice/barsSlice";
import { IoHomeOutline } from "react-icons/io5";
const BarsCard = () => {
  const dispatch = useDispatch();
  const {openBars} = useSelector((state) => state.bars);

  return (
    <div className={openBars ? "barscart active" : "barscart"}>
      <div className="insite">
        <div className="close">
          <div className="img">
            <img src="../imegs/Logo 1.png" alt="" />
          </div>
          <MdClose onClick={() => dispatch(OpenBars())} />
        </div>
        <div className="register">
          <div className="div">
            <div className="bg">
              <FaUserTie />
            </div>
            <p>Войти</p>
            <span>|</span>
            <p>Регистрация</p>
          </div>
        </div>

        <div className="categories">
          <Link>
            <div className=" category">
              <div className="div">
                <BsJournalBookmark />
                <p>Наши магазины</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className=" category">
              <div className="div">
                <GiCardExchange />
                <p>B2B продажи</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className=" category">
              <div className="div">
                <LiaCommentsDollarSolid />
                <p>Покупка в рассрочку</p>
              </div>
            </div>
          </Link>
          <Link>
            <div className=" category">
              <div className="div">
                <LuWallet /> <p>Способы оплаты</p>
              </div>
            </div>
          </Link>

          <Link>
            <div className=" category">
              <div className="div">
                <GoShieldCheck />
                <p>Гарантия на товары</p>
              </div>
            </div>
          </Link>
        </div>

        <div className="languages">
          <Link>
            <button className="rus">Рус</button>
          </Link>
          <Link>
            <button className="uzb">Узб</button>
          </Link>
        </div>

        <div className="call">
          <p>
            <IoCallOutline />
            +998 95 123 55 88
          </p>
        </div>
      </div>

   
    </div>
  );
};

export default BarsCard;
