import { IoIosArrowForward } from "react-icons/io";
import { SlClose } from "react-icons/sl";
import "./Favorites.scss"
import { Favorites_components } from "../..";
const Favorites = () => {
  return (
    <>
      <div className="map">
        <p>
          Главная  <IoIosArrowForward /> Изброанное{" "}
        </p>
        <p className="close"> <SlClose />Удалит все</p>
      </div>
        <Favorites_components/>
    </>
  );
};

export default Favorites;
