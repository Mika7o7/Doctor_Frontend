import React from "react";
import { Link } from "react-router-dom";
import {
  WidgetNavMenue,
  WidgetMenuBox,
  ActiveLi,
} from "../../style/Base.styled";

const CategoryBox = ({ data }) => {
  return (
    <WidgetNavMenue>
      <WidgetMenuBox>
        {data.map((item) => (
          <ActiveLi key={item.id}>
            <Link
              className={({ isActive }) => (isActive ? "active" : "")}
              to={item.url}
            >
              {item.name}
            </Link>
          </ActiveLi>
        ))}
      </WidgetMenuBox>
    </WidgetNavMenue>
  );
};

export default CategoryBox;
