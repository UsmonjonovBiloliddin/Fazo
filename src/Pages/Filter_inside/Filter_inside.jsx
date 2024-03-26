
import {AStarter ,Filter_inside_product_direction ,Praduct_Aboute, RecentlyViewed} from "../../";
import "./Filter_inside.scss";
import { IoIosArrowForward } from "react-icons/io";
const Filter_inside = () => {
  return (
    <>
      <div className="map">
        <p>
          Главная <IoIosArrowForward /> Ноутбуки <IoIosArrowForward /> Apple
        </p>
      </div>
      <div className="Filter_inside">
        <div className="Slider">
        </div>
        <div className="right">
          <div className="Aboute">
            <Filter_inside_product_direction />
            <Praduct_Aboute />
            
          </div>
          <div className="AStarter">
            <AStarter />
          </div>
          <RecentlyViewed/>
        </div>
      </div>
    </>
  );
};

export default Filter_inside;
