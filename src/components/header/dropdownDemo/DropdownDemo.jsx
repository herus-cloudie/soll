import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import DropdownDemoStyles from "./DropdownDemo.style";
import Data from "../../../assets/data/demoMenuList";
import MenuGridIcon from "../../../assets/images/icons/menu-grid.svg";

const DropdownDemo = ({ className, variant }) => {
  const [isDropdownDemoActive, setIsDropdownDemoActive] = useState(false);
  const handleDropdownDemo = () => {
    setIsDropdownDemoActive(!isDropdownDemoActive);
  };

  return (
    <DropdownDemoStyles className={className} variant={variant}>
      <button className="demo-btn">
        <img src={MenuGridIcon} alt="menu" />
      </button>
      <ul className="dropdown-demo-list">
        {[{title: "User Interface 1", url: "/home-eight"},{title: "User Interface 2" , url: "/",}]?.map((item, i) => (
          <li key={i}>
            <NavLink to={item.url} end>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </DropdownDemoStyles>
  );
};

export default DropdownDemo;
