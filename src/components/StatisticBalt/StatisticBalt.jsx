import React from "react";
import { Container, Row } from "../../style/Base.styled";
import { BiUser, BiEnvelope, BiDonateHeart } from "react-icons/bi";
import { FiThumbsUp } from "react-icons/fi";
import {
  TtmRowWrapper,
  CollMd3,
  TtmFid,
  TtmWrapperIcon,
  TtmWrapperContest,
  SpetialSpan,
} from "./StatisticBalt.styled";

const StatisticBalt = () => {
  return (
    <>
      <TtmRowWrapper>
        <Container>
          <Row>
            <CollMd3>
              <TtmFid>
                <TtmWrapperIcon>
                  <BiUser />
                </TtmWrapperIcon>
                <TtmWrapperContest>
                  <h4>
                    <SpetialSpan>3215</SpetialSpan>
                  </h4>
                  <h3>
                    <span>Clients</span>
                  </h3>
                </TtmWrapperContest>
              </TtmFid>
            </CollMd3>
            <CollMd3>
              <TtmFid>
                <TtmWrapperIcon>
                  <BiEnvelope />
                </TtmWrapperIcon>
                <TtmWrapperContest>
                  <h4>
                    <SpetialSpan>152</SpetialSpan>
                  </h4>
                  <h3>
                    <span>Hospitals Rooms</span>
                  </h3>
                </TtmWrapperContest>
              </TtmFid>
            </CollMd3>
            <CollMd3>
              <TtmFid>
                <TtmWrapperIcon>
                  <BiDonateHeart />
                </TtmWrapperIcon>
                <TtmWrapperContest>
                  <h4>
                    <SpetialSpan>30</SpetialSpan>
                  </h4>
                  <h3>
                    <span>Years of Experiance</span>
                  </h3>
                </TtmWrapperContest>
              </TtmFid>
            </CollMd3>
            <CollMd3>
              <TtmFid>
                <TtmWrapperIcon>
                  <FiThumbsUp />
                </TtmWrapperIcon>
                <TtmWrapperContest>
                  <h4>
                    <SpetialSpan>124</SpetialSpan>
                  </h4>
                  <h3>
                    <span>Qualified Staffs</span>
                  </h3>
                </TtmWrapperContest>
              </TtmFid>
            </CollMd3>
          </Row>
        </Container>
      </TtmRowWrapper>
      <br />
      <br />
    </>
  );
};

export default StatisticBalt;
