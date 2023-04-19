import React, { useState } from "react";
import "./Value.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import data from "../../utils/accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";

const AccordionItemWrapper = ({ item, uuid }) => {
  const [expanded, setExpanded] = useState(false);
  const [className, setClassName] = useState("");

  const handleExpansion = (newState) => {
    setExpanded(newState);
    setClassName(newState ? "expanded" : "collapsed");
  };

  return (
    <AccordionItem
      className={`accordionItem ${className}`}
      key={uuid}
      uuid={uuid}
      onClick={() => handleExpansion(!expanded)}
    >
      <AccordionItemHeading>
        <AccordionItemButton className="flexCenter accordionButton">
          <div className="flexCenter icon">{item.icon}</div>
          <span className="primaryText">{item.heading}</span>
          <div className="flexCenter icon">
            <MdOutlineArrowDropDown />
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel className="accordion_panel">
        <p className="secondaryText">{item.detail}</p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

const Value = () => {
  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        <div className="v-left">
          <div className="image-container">
            <img src="./value.png" alt="" />
          </div>
        </div>
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value WE Give to You</span>
          <span className="secondaryText">
            We always ready to help by providing the best services for you.
            <br />
            We believe a good place to live can make your life better
          </span>
          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => (
              <AccordionItemWrapper item={item} uuid={i} key={i} />
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
