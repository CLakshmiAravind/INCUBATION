import styled from "styled-components";

export const DbContainer = styled.div`
  min-height: 1000px;
  // overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 100%;

  position: absolute;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    min-height: 1300px;
    // overflow: hidden;
  }
`;

export const DbBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // overflow: hidden;
`;

export const DbRow = styled.hr`
  border-top: 1px dotted black;
  position: relative;
  margin-left: 200px;
  margin-right: 250px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const DbH1 = styled.h1`
  font-family: Encode sans expanded;
  margin-left: 200px;
  margin-top: 20px;
  padding: 10px;
  opacity: 0.7;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    font-size: 30px;
    margin-left: 0px;
  }
`;
