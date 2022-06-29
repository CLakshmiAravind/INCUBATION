import React from "react";
import { Row } from "react-bootstrap";
import { DbBg, DbH1, DbRow, DbContainer } from "./MainScreen";

const MainScreen = ({ title, children }) => {
  return (
    <>
      <DbContainer id="dashboard">
        <Row>
          <DbBg>
            {title && (
              <>
                <DbH1>{title}</DbH1>
                <DbRow />
              </>
            )}
            {children}
          </DbBg>
        </Row>
      </DbContainer>
    </>
  );
};

export default MainScreen;
