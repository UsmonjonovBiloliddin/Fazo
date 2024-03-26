import "./Filtr.scss";
import { IoIosArrowForward } from "react-icons/io";
import { DataFilter, FilterResult } from "../..";
import { useParams } from "react-router-dom";
const Filtr = () => {
  const {id ,id2} = useParams()
  return (
   <>
      <div className="map">
        <h5>Главная <IoIosArrowForward /> {id}  </h5>
        <p className="p">Товаров 24 / 249</p>
      </div>
    <div className="Filter">
      <DataFilter />
      <FilterResult id={id} id2={id2} />
    </div>
   </>
  );
};

export default Filtr;
