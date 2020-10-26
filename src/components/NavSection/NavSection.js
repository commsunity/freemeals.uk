import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
import Banner from "images/banner.svg";
import Header from "images/header.svg";
import PostcodeSearch from "../PostcodeSearch/index"
import LocationFilter from "components/LocationFilter";

const NavSection = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;
  
    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  return (
    <NavSectionContainer>
      <img className={!visible ? "header header--hidden" : "header"} src={Header} alt={"FREE SCHOOL MEALS"} />
      <img className="banner" src={Banner} alt={"FREE SCHOOL MEALS"} />
      <div className="filters">
        <PostcodeSearch />
        <LocationFilter />
      </div>
    </NavSectionContainer>
  );
};

const NavSectionContainer = styled.div`
  width: 100%;
  > img {
    display: block;
    margin: 0 auto 10px;
    max-width: 100%;
  }
  .header{
    display: block;
    width: 100%;
    padding: 10px;
    top: 0;
    transition: top 0.6s;
    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }
  .header--hidden{
    top: -50px;
    /* display: none; */
  }
  .banner {
    display: none;
    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: block;
      margin-top: -15px;
    }
  }
  .filters {
    display: none;
    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: block;
      margin-top: 10px;
    }
  }
`;

export default NavSection;
