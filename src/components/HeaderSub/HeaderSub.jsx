import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Collg12 } from "../../style/Base.styled";
import { TiHomeOutline } from "react-icons/ti";
import {
  HeaderWrapper,
  TitleBox,
  PageTitle,
  Breadcrumb,
  BreadcrumbIner,
  Title,
} from "./HeaderSub.styled";

const HeaderSub = ({ props }) => {
  return (
    <HeaderWrapper>
      <Container>
        <Row>
          <Collg12>
            <TitleBox>
              <PageTitle>
                <Title>{props.title}</Title>
                <span>{props.sub_title}</span>
              </PageTitle>
              <Breadcrumb>
                <Container>
                  <BreadcrumbIner>
                    <span>
                      <Link to=''>
                        <TiHomeOutline /> Home
                      </Link>
                    </span>
                    <span> | </span>
                    <span style={{ color: "#01d6a3" }}>
                      {props.point_of_place}
                    </span>
                  </BreadcrumbIner>
                </Container>
              </Breadcrumb>
            </TitleBox>
          </Collg12>
        </Row>
      </Container>
    </HeaderWrapper>
  );
};

export default HeaderSub;
