import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
import Banner from "images/banner.svg";
import Header from "images/header.svg";
import PostcodeSearch from "../PostcodeSearch/index"
import LocationFilter from "components/LocationFilter";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const NavSection = () => {
  const [sticky, setSticky] = useState(false)

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y
      if (isShow !== sticky) setSticky(isShow)
    },
    [sticky]
  )

  return (
    <NavSectionContainer>
      <img className={sticky ? "header header--sticky" : "header"} src={Header} alt={"FREE SCHOOL MEALS"} />
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
    position: "sticky";
    transition: "transform 400ms ease-in";
    transform: "translateY(0)";
    width: 100%;
    padding: 10px;
    top: 0;
    @media screen and (min-width: ${BREAKPOINTS.md}) {
      display: none;
    }
  }
  .header--sticky{
    transform: "translateY(100%)";
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
