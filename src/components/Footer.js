import React from "react";
import styled from "styled-components";

const StyledCredit = styled.div`
  position: relative;
  color: white;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  z-index: 20;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: 20px;
  line-height: 2;
  a {
    color: #fff;
  }
`;

const Footer = () => {
  return (
    <StyledCredit>
      <small>
        Images from Unsplash by{" "}
        <a
          href="https://unsplash.com/photos/2Hzmz15wGik"
          target="_Blank"
          rel="noreferrer"
        >
          Pine Watt
        </a>
      </small>
      <small>
        Images from Unsplash by{" "}
        <a
          href="https://unsplash.com/photos/-djRG1vB1pw"
          target="_Blank"
          rel="noreferrer"
        >
          Alexandru Zdrobău
        </a>
      </small>
      <small>
        Images from Unsplash by{" "}
        <a
          href="https://unsplash.com/photos/vqTuculoZew"
          target="_Blank"
          rel="noreferrer"
        >
          Vladislav Nahorny
        </a>
      </small>
      <small>
        Images from Unsplash by{" "}
        <a
          href="https://unsplash.com/photos/o1radglopDA"
          target="_Blank"
          rel="noreferrer"
        >
          Jack B
        </a>
      </small>
      <small>
        Images from Unsplash by{" "}
        <a
          href="https://unsplash.com/photos/1L71sPT5XKc"
          target="_Blank"
          rel="noreferrer"
        >
          Rosie Sun
        </a>
      </small>
    </StyledCredit>
  );
};

export default Footer;
