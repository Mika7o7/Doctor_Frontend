import React from "react";
import { TbExternalLink } from "react-icons/tb";

import {
  NameSection,
  TtmTeamPosition,
  DoctorBox,
  FeaturedThumblain,
  TtmBoxOwerflow,
  FeaturedIconbox,
  FeaturedCntent,
  FeaturedTitle,
  FeaturedImg,
  ImagePlaceholder,
} from "./DoctorsCard.styled";
import { Link } from "react-router-dom";

const DoctorsCard = ({ data }) => {
  // let props = {
  //   title: "Our Special Doctors",
  //   doctors: {
  //     id: 1,
  //     name: "Mikael Ohanyan",
  //     avatar: doctor,
  //     profession: [
  //       {
  //         id: 1,
  //         name: "Ginekolog",
  //       },
  //       {
  //         id: 2,
  //         name: "Pidiator",
  //       },
  //     ],
  //   },
  // };

  return (
    <DoctorBox>
      <FeaturedThumblain>
        <FeaturedImg src={data.avatar} alt={data.name} />
        <ImagePlaceholder />
      </FeaturedThumblain>

      <Link
        to={{
          pathname: `/ourdoctors/${data.id}/`,
          state: { id: data.id },
        }}
      >
        <TtmBoxOwerflow>
          <FeaturedIconbox>
            <TbExternalLink size={24} />
          </FeaturedIconbox>
        </TtmBoxOwerflow>
      </Link>
      <FeaturedCntent>
        <TtmTeamPosition>
          {data.profession.map((p) => p.name).join(", ")}
        </TtmTeamPosition>
        <FeaturedTitle>
          <NameSection>{data.name}</NameSection>
        </FeaturedTitle>
      </FeaturedCntent>
    </DoctorBox>
  );
};

export default DoctorsCard;
