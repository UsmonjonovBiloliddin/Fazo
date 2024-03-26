import "./Modal_media.scss"
import { IoCloseOutline } from "react-icons/io5";
import {
  FiArrowLeft,
  FiChevronRight,
} from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { categoryThemes, categoryThemesInside } from "../../../../category";
const Modal_media = ({categories , setCategories}) => {

  const [categorySubmenuId, setCategorySubmenuId] = useState();

  return (
         <div
        className={categories ? "bottom_category_block_responsive active" : "bottom_category_block_responsive"}
      >
        <div className="bottom_category_block_responsive_top ">
          <div className="category_block_top_logo">
            <img src="./imegs/Logo.png" alt="" />
          </div>
          <div
           
            className="category_block_top_closeButton"
          >
            <IoCloseOutline onClick={() => setCategories(!categories)} />
          </div>
        </div>
        <ul>
          {categoryThemes.map((item) => (
            <li
              onClick={() => setCategorySubmenuId(item.id)}
              className={categorySubmenuId === item.id ? "onhover" : ""}
              key={item.id}
            >
              <div className="left_part">
                <item.icon />
                <p>{item.name}</p>
              </div>

              <FiChevronRight />
            </li>
          ))}
          {/* bottom_category_block_inside */}
          {categoryThemesInside
            .filter((item) => categorySubmenuId == item.id)
            .map((item) => (
              <div className="bottom_category_block_inside" key={item.id}>
                <div className="block_inside_top">
                  <FiArrowLeft onClick={() => setCategorySubmenuId(null)} />
                  <h3>{item.name}</h3>
                </div>
                <ul>
                  {item.listCategoryNames.map((submenuItems) => (
                    <li key={submenuItems.id}>{submenuItems.subname}</li>
                  ))}
                </ul>
              </div>
            ))}
        </ul>
      </div>
  )
}

export default Modal_media