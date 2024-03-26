import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { categoryThemes, categoryThemesInside } from "../../../../category";

import "./Modal.scss"

const Modal = ({categories}) => {
  const [categorySubmenuId, setCategorySubmenuId] = useState(1);
    
  return (
    <div className="Modal">
      <div
        className={categories ? "Catigories_modal active" : "Catigories_modal"}
      >
        <div className="left">
          {categoryThemes &&
            categoryThemes.map((categoty) => (
              <div
                onMouseEnter={() => setCategorySubmenuId(categoty.id)}
                className="select"
                key={categoty.id}
              >
                <div className="text">
                  <categoty.icon />
                  <p>{categoty.name}</p>
                </div>
                <IoIosArrowForward />
              </div>
            ))}
        </div>

        <div className="right">
            <div className="text">
            {categoryThemesInside
            .filter((item) => categorySubmenuId == item.id)
            .map((item) => (
              <div key={item.id}>
                <h3>{item.name}</h3>
                <div>
                  {item.listCategoryNames.map((submenuItems) => (
                    <div className="select" key={submenuItems.id}>{submenuItems.subname}</div>
                  ))}
                </div>
              </div>
            ))}
            </div>
            {/* <div className="imeg">
                <img src="../imegs/7.jpg" alt="" />
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
