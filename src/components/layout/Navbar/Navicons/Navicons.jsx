import React from 'react'
import { VscLocation} from "react-icons/vsc";
import { TfiTimer} from "react-icons/tfi";
import { GrFacebookOption} from "react-icons/gr";
import { AiOutlineTwitter} from "react-icons/ai";
import { TfiPinterest} from "react-icons/tfi";
import { GrLinkedinOption} from "react-icons/gr";
import {ContainerNavIcon, NavAppIcon, NavTwiIcon, NavInetIcons, NavInIcon, NavIconLoc, MainNavIcon, NavIconTime} from './Navicons.styled'
function Navicons() {
  return (
    <ContainerNavIcon>
    <MainNavIcon>
        <div>
            <NavIconLoc><VscLocation style={{color:'#02D1A3', fontSize:'16px'}}/> 234 Triumph, Los Angeles, California, US</NavIconLoc>
            <NavIconTime><TfiTimer style={{color:'#02D1A3', fontSize:'16px'}}/> Mon - Sat 8.00 - 18.00. Sunday CLOSED</NavIconTime>
        </div>
        <div>
            <span><NavInetIcons href=''><GrFacebookOption/></NavInetIcons></span>
            <NavTwiIcon><NavInetIcons href=''><AiOutlineTwitter/></NavInetIcons></NavTwiIcon>
            <span><NavInetIcons href=''><TfiPinterest/></NavInetIcons></span>
            <NavInIcon><NavInetIcons href=''><GrLinkedinOption/></NavInetIcons></NavInIcon>
            <span><NavAppIcon href=''> GET A  APPOINTMENT</NavAppIcon></span>
        </div>
    </MainNavIcon>
    </ContainerNavIcon>
  )
}

export default Navicons
