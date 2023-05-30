import React from "react";
import { BiHeadphone } from "react-icons/bi";
import {
  WidgetText,
  WidgetInfo,
  Icon,
  TitleH3,
  Content,
} from "./Widget.styled";
import { Link } from "react-router-dom";

const Widget = () => {
  return (
    <WidgetText>
      <WidgetInfo>
        <Icon>
          <BiHeadphone />
        </Icon>
        <TitleH3>
          <h3>Let's Help You!</h3>
        </TitleH3>
        <Content>
          14 Tottenham Court Roadbr <br />
          Bulls Stadium, Califorina <br />
          1234, USA <br />
          <Link to=''>info@example.com</Link>
        </Content>
        <br />
        <Link to=''>View More</Link>
      </WidgetInfo>
    </WidgetText>
  );
};

export default Widget;
