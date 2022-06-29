import styled from "styled-components";
import { Link } from "react-router-dom";

export const CseContainer = styled.div`
  min-height: 720px;
  overflow: hidden;
  display: flex;
  //background-color: ;
  flex-direction: column;
  justify-content: center;
  align-items: default;
  /*background: rgb(32, 178, 170);
  background: linear-gradient(
    153deg,
    rgba(32, 178, 170, 1) 0%,
    rgba(2, 0, 36, 1) 76%
  );*/

  @media screen and (max-width: 768px) {
    min-height: 100px;
    overflow: hidden;
    //margin-bottom: 500px;
  }

  @media screen and (max-width: 480px) {
    min-height: 100px;
    overflow: hidden;
  }
`;

export const CseBg = styled.div`
  display: flex;
  //background-color: ;
  flex-direction: column;
  min-height: 800px;
  overflow: hidden;
  justify-content: center;
  align-items: default;
  background: rgb(32, 178, 170);
  background: linear-gradient(
    153deg,
    rgba(32, 178, 170, 1) 0%,
    rgba(2, 0, 36, 1) 76%
  );

  @media screen and (max-width: 768px) {
    min-height: 100px;
    overflow: hidden;
    //margin-bottom: 500px;
  }

  @media screen and (max-width: 480px) {
    min-height: 100px;
    overflow: hidden;
  }
`;

export const CseWrapper = styled.div`
  max-width: 1000px;
  min-height: 100px;
  overflow: hidden;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  //padding: 20px 30px;
  margin-top: 80px;
  padding-bottom: 30px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-top: 100px;
    padding: 0 20px;
    padding-bottom: 30px;
  }
`;

export const CseBox = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 40px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`;

/** export const StartupIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`; **/

export const CseTextWrapper = styled.div`
  max-width: 600px;
  height: auto;
  padding: -20px 10px;
`;

export const CseH1 = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 1rem;
  }
`;

export const CseP1 = styled.p`
  color: red;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const CseP2 = styled.p`
  color: #000;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

export const CseP3 = styled.p`
  max-width: 440px;
  margin-bottom: 50px;
  text-align: justify;
  font-size: 16px;
  line-height: 24px;

  @media screen and (max-width: 900px) {
    font-size: 14px;
  }
`;

export const CseButton = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    //display: none;
  }
`;

export const CseBtnLinkA = styled.a`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #20b2aa;
    color: #000;
  }
`;

export const CseBtnLink = styled(Link)`
  border-radius: 50px;
  background: #000;
  white-space: nowrap;
  padding: 10px 20px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #20b2aa;
    color: #000;
  }
`;

export const Dropdown = styled.div`
  background: #1c1c1c;
  color: #fff;
  width: 100%;
  //height: fit-content;
  min-height: 100px;
  overflow: hidden;
  //overflow-x: hidden;
  //overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #00ffb9;
  border-top: 1px solid #00ffb9;
`;

export const AccP3 = styled.p`
  max-width: auto;
  margin-bottom: 50px;
  text-align: justify;
  font-size: 16px;
  line-height: 24px;
  padding: 10px 30px;
`;

export const Footer = styled.footer`
  text-align: right;
  font-size: 10px;
`;
