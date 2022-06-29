import styled from "styled-components";

export const Container = styled.div`
  min-height: 1000px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // #11a39b
  background: linear-gradient(108deg, rgba(1, 1, 1, 1) 0%, rgba(fff) 100%);
`;

export const FormWrap = styled.div`
  min-height: 950px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
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
  max-width: 1100px;
  height: 950px;
  overflow: hidden;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 130px 20px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const FormH1 = styled.h1`
  //margin-bottom: 40px;
  color: #fff;
  font-size: 30px;
  font-weight: 550;
  text-align: center;
  margin-top: -100px;
`;

export const DropDownWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Dropdown = styled.div`
  width: 400px;
  user-select: none;
  margin: 10px auto;
  position: relative;
`;
export const DropdownBtn = styled.input`
  padding: 10px 40px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  cursor: pointer;
`;

export const DropdownInput = styled.input``;

export const DDIcon = styled.div`
  display: flex;
  //position: absolute;
  //transform: translate(-100%, 60%);
  font-size: 1.2rem;
  //margin-top: 25px;
  //margin-right: 35px;
  cursor: pointer;
  color: #000;
`;

export const DDContent = styled.div`
  position: absolute;
  top: 110%;
  left: 0;
  padding: 10px;
  background: #fff;
  box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
  font-weight: 500;
  color: #333;
  width: 96%;
`;

export const DDItem = styled.div`
  padding: 10px;
  cursor: pointer;
  //color: #000;
  transition: all 0.2s;

  &:hover {
    background: #f4f4f4;
  }
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff;
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: #20b2aa;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

/*export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;*/

export const FormText = styled.div`
  font-size: 14px;
`;
