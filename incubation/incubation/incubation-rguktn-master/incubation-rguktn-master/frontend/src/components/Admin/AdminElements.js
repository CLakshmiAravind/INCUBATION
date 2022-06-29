import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashBtn = styled.nav`
  display: flex;
  align-items: center;
  padding: 20px 10px;
  margin-left: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    margin-left: 140px;
  }
`;

export const DashBtnLink = styled(Link)`
  border-radius: 50px;
  background: #20b2aa;
  white-space: nowrap;
  padding: 9px 20px;
  color: #000;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: gray;
    color: #000;
  }
`;

export const AccordionSection = styled.div`
  //margin-left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  right: 30px;
  //height: fit-content;
  background: #fff;
`;

export const Container = styled.div`
  position: absolute;
  top: 30%;
  box-sizing: border-box;
  width: 1100px;
  height: 50px;
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    box-sizing: border-box;
    width: 500px;
    margin-left: 60px;
  }

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    box-sizing: border-box;
    width: 500px;
    margin-left: 60px;
  }

  @media screen and (max-width: 540px) {
    transition: 0.8s all ease;
    box-sizing: border-box;
    width: 400px;
    margin-left: 60px;
    height: 50px;
  }
`;

export const Wrap = styled.div`
  background: #272727;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;
  width: 100%;
  text-align: center;
  cursor: pointer;
  border-bottom: 3px solid #fff;
  border-top: 3px solid #fff;
`;

export const AccH1 = styled.h1`
  padding: 2rem;
  font-size: 26px;
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

export const AccP1 = styled.p`
  color: #fff;
  font-size: 16px;
  line-height: 16px;
  margin-top: 20px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export const AccP2 = styled.p`
  color: #fff;
  font-size: 10px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
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

export const AccBtn = styled.nav`
  display: flex;
  align-items: center;
  //padding: 20px 10px;
  //margin-left: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    //margin-left: 140px;
  }
`;

export const AccBtnLink = styled(Link)`
  border-radius: 10px;
  background: lightseagreen;
  white-space: nowrap;
  padding: 5px 22px;
  color: #000;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;

export const AccBtnn = styled.nav`
  display: flex;
  align-items: center;
  //padding: 20px 10px;
  //margin-left: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    //margin-left: 140px;
  }
`;

export const AccBtnnLink = styled(Link)`
  border-radius: 10px;
  background: indianred;
  white-space: nowrap;
  padding: 5px 15px;
  color: #000;
  font-size: 13px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #000;
  }
`;

export const BtnWrap = styled.div`
  //margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 7px;
`;
