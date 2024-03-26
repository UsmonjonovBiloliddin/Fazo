import "./Data_Filter.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox, Slider } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Filterpraduct, praductFilter } from "../../../Slice/laptop";
import { FilterCheckbox } from "../../../ui/index";
const Data_Filter = () => {
  const [price, setPrice] = useState(0);
  const [today, setToday] = useState("");
  const [brand, setBrand] = useState("");
  const [country, setountry] = useState("");

  const dispatch = useDispatch();

  const filter = {
    price,
    today,
    brand,
    country,
  };

  dispatch(praductFilter(filter));
  
  const handlebutton = () => {
    dispatch(Filterpraduct())
  };
  return (
    <div className="Data_filter">
      <div className="height">
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
            style={{ color: "#404040" }}
          >
            Цена (cум)
          </AccordionSummary>
          <AccordionDetails>
            <Slider
              aria-label="Temperature"
              shiftStep={30}
              step={5}
              min={0}
              max={2000}
              onChange={(e) => setPrice(e)}
            />
          </AccordionDetails>
        </Accordion>
        
        <div className="Availability">
          <p>Наличие</p>
          <div className="checkbox">
            <Checkbox onChange={(e) => setToday(e.target.checked)}>
              Забрать сегодня
            </Checkbox>
          </div>
        </div>

        <FilterCheckbox name={"Бренд"} state={brand} setState={setBrand} ch1={"LG"} ch2={"Samsung"} ch3={"Artel"} ch4={"Huawei"}/>
        
        <FilterCheckbox name={"Battery"} ch1={"1821 мА⋅ч"} ch2={"3000 мА⋅ч"} ch3={"4500 мА⋅ч"}  ch4={"5000 мА⋅ч"}/>

        <FilterCheckbox name={"Страна производитель"} setState={setountry} state={country} ch1={"Китай"} ch2={" Вьетнам"} ch3={"Artel"}  ch4={"Huawei"}/>

        <button onClick={handlebutton}>Показать</button>
      </div>
    </div>
  );
};

export default Data_Filter;
