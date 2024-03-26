import { FaArrowRightLong, FaRegHeart } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { MdFilterListAlt } from 'react-icons/md';
import "./RecentlyViewed.scss"
const RecentlyViewed = () => {
  return (
    <div className="Boxs">
        <div className="Boxs_text ">
          <h2>Недавно просмотренные</h2>
          <Link>
            {" "}
            <p>
              Посмотреть все <FaArrowRightLong />
            </p>
          </Link>
        </div>

        <div className="Boxs_boxes ">
          <div className="Boxs_box">
            <div className="img">
              <img src="../imegs/Rectangle 24.png" alt="" />
            </div>
            <div className="price">
              <h3>18 000 сум/мес</h3>
              <p>529 000 сум</p>
            </div>
            <div className="name">
              <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
            </div>

            <div className="shop">
              <FiShoppingCart />
              <hr />
              <FaRegHeart />
              <hr />
              <MdFilterListAlt />
            </div>
          </div>
          <div className="Boxs_box">
            <div className="img">
              <img src="../imegs/Rectangle 24.png" alt="" />
            </div>
            <div className="price">
              <h3>18 000 сум/мес</h3>
              <p>529 000 сум</p>
            </div>
            <div className="name">
              <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
            </div>

            <div className="shop">
              <FiShoppingCart />
              <hr />
              <FaRegHeart />
              <hr />
              <MdFilterListAlt />
            </div>
          </div>
          <div className="Boxs_box">
            <div className="img">
              <img src="../imegs/Rectangle 24.png" alt="" />
            </div>
            <div className="price">
              <h3>18 000 сум/мес</h3>
              <p>529 000 сум</p>
            </div>
            <div className="name">
              <h2>Телефон TECNO Spark 6 Go KE5j 3/64GB Ice Jadeite</h2>
            </div>

            <div className="shop">
              <FiShoppingCart />
              <hr />
              <FaRegHeart />
              <hr />
              <MdFilterListAlt />
            </div>
          </div>
         
        </div>
      </div>
  )
}

export default RecentlyViewed