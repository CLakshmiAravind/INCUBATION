import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 690px;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // #11a39b
  background: linear-gradient(108deg, rgba(1, 1, 1, 1) 0%, rgba(fff) 100%);
`;
export const Text = styled.div
export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  // align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 90%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: #000;
  // position:fixed;
  top:0px;
  font-weight: 700;
  font-size: 32px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const FormContent = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: #010101;
  max-width: 400px;
  height: 90%;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 17px 22px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 13px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 10px 10px;
  margin-bottom: 22px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #20b2aa;
  padding: 10px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const FormText = styled.div`
  font-size: 14px;
`;

export const FormP = styled.p`
  font-size: 10px;
  color: orange;
  text-shadow: 2px 2px 4px #000000;
  margin-bottom: 10px;
  margin-top: -10px;
`;
