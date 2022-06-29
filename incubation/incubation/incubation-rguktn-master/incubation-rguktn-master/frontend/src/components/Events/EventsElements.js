import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventsContainer = styled.div`
  color: #fff;
  background: linear-gradient(
    153deg,
    rgba(32, 178, 170, 1) 0%,
    rgba(2, 0, 36, 1) 76%
  );
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const EventsWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  // margin-right: auto;
  // margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const EventsRow = styled.div`
  display: flex;
  grid-auto-rows: auto;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const EventsTextWrapper = styled.div`
  // max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: orange;
  text-shadow: 2px 2px 4px #000000;
  text-align: justify;
  margin-top: 20px;
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 25px;
  text-align: justify;
  line-height: 1;
  font-weight: 600;
  color: #fff;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  // max-width: 440px;
  margin-bottom: 50px;
  text-align: justify;
  font-size: 16px;
  line-height: 24px;
  color: #fff;
`;

export const EventsLink = styled.a`
  color: #fff;
  text-decoration: none;
`;
