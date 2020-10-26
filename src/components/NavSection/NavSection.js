import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { BREAKPOINTS } from "../../constants";
import Banner from "images/banner.svg";
import Header from "images/header.svg";
import PostcodeSearch from "../PostcodeSearch/index"
import LocationFilter from "components/LocationFilter";

const NavSection = () => {
  const [show, setShow] = useState(true);
  const [scrollPos, setScrollPos] = useState(0);

  const handleScroll = () => {
      setScrollPos(document.body.getBoundingClientRect().top)
      setShow(document.body.getBoundingClientRect().top > scrollPos)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  })

  return (
    <Transition>
      <NavSectionContainer className={show ? "active" : "hidden"}>
        <img className="header" src={Header} alt={"FREE SCHOOL MEALS"} />
        <img className="banner" src={Banner} alt={"FREE SCHOOL MEALS"} />
        <div className="filters">
          <PostcodeSearch />
          <LocationFilter />
        </div>
      </NavSectionContainer>
    </Transition>
  );
};

const Transition = styled.div`
  .active {
    visibility: visible;
    transition: all 200ms ease-in;
  }
  .hidden {
    top: -50px;
    visibility: hidden;
    transition: all 200ms ease-out;
    transform: translate(0, -100%);
  }
`;

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
