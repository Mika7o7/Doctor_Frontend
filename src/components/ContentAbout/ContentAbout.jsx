import React from "react";
import { Container, Row, Collg9 } from "../../style/Base.styled";
import {
  Collg2,
  Collg3,
  Collg6,
  Collg10,
  TtmColBgColor,
  TtmSingleImg,
  AboutImg,
  Pt105,
  Dflex,
  DflexColum,
} from "./ContentAbout.styled";
import singleimgfour from "../../images/single-img-four.png";
import Sign from "../../images/Sign.png";
import { FaHospital } from "react-icons/fa";
import Titlesec from "../TitleSec/Titlesec";

const ContactAbout = () => {
  let data = {
    title: "WHAT WE DO",
    secondTitle: "We Have 25 Years Experience",
    description: `We offer extensive medical procedures to outbound and
    inbound patients what it is and we are very proud of
    achievement of our stpatients for recovery Our Clinic has
    grown to provide a world class facility for the treatment of
    tooth loss, dental cosmetics and bore advanced restorative
    dentistry. We are among the most qualified implant providers
    in the AUS with over 30 years of quality training and
    experience`,
  };
  return (
    <Container>
      <Row>
        <Collg2>
          <TtmColBgColor>
            <TtmSingleImg>
              <AboutImg src={singleimgfour} />
            </TtmSingleImg>
          </TtmColBgColor>
        </Collg2>
        <Collg10>
          <Row>
            <Collg3></Collg3>
            <Collg9>
              <Pt105>
                <Titlesec data={data} />

                <Collg6>
                  <AboutImg src={Sign} />
                </Collg6>
                <Row>
                  <Dflex>
                    <div>
                      <FaHospital />
                    </div>
                    <DflexColum>
                      <span>Online</span>
                      <span>Appointment!</span>
                    </DflexColum>
                  </Dflex>
                  <Dflex>
                    <div>
                      <FaHospital />
                    </div>
                    <DflexColum>
                      <span>Online</span>
                      <span>Appointment!</span>
                    </DflexColum>
                  </Dflex>
                  <Dflex>
                    <div>
                      <FaHospital />
                    </div>
                    <DflexColum>
                      <span>Online</span>
                      <span>Appointment!</span>
                    </DflexColum>
                  </Dflex>
                </Row>
              </Pt105>
            </Collg9>
          </Row>
        </Collg10>
      </Row>
    </Container>
  );
};

export default ContactAbout;
