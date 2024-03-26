import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Checkbox } from "antd";

const FilterCheckbox = ({ name, state, setState, ch1, ch2, ch3, ch4 }) => {
  return (
    <div className="Check" style={{margin:"20px 0px"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ color: "#404040" }}
        >
          {name}
        </AccordionSummary>
        <AccordionDetails>
          <div className="checkboxs">
            <Checkbox
              value={state}
              onChange={(e) =>
                e.target.checked ? setState({ ch1 }) : setState("")
              }
            >
              {ch1}
            </Checkbox>
            <Checkbox
              onChange={(e) =>
                e.target.checked ? setState({ ch2 }) : setState("")
              }
            >
              {ch2}
            </Checkbox>
            <Checkbox
              onChange={(e) =>
                e.target.checked ? setState({ ch3 }) : setState("")
              }
            >
              {ch3}
            </Checkbox>
            <Checkbox
              onChange={(e) =>
                e.target.checked ? setState({ ch4 }) : setState("")
              }
            >
              {ch4}
            </Checkbox>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default FilterCheckbox;
