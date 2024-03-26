import { Link } from "react-router-dom"
import "./interest.scss"
import { FaArrowRightLong } from "react-icons/fa6"
import { FiShoppingCart } from "react-icons/fi"
import { FaRegHeart } from "react-icons/fa"
import { MdFilterListAlt } from "react-icons/md"
const interest = () => {
  return (
    <div className="Products_that_may_also_be_of_interest">
    <div className="interest_text ">
      <h2>Товары которые так же могут быть интересны</h2>
      <Link>
        {" "}
        <p>
          Посмотреть все <FaArrowRightLong />
        </p>
      </Link>
    </div>

    <div className="interest_boxes ">

      <div className="interest_box">
        <div className="img">
          <img src="../../imegs/Rectangle 24.png" alt="" />
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
      <div className="interest_box">
        <div className="img">
          <img src="../../imegs/Rectangle 24.png" alt="" />
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
      <div className="interest_box">
        <div className="img">
          <img src="../../imegs/Rectangle 24.png" alt="" />
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

export default interest