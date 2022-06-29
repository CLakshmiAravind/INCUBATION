import React from "react";
import Icon1 from "../../images/svg-3.svg";
import Icon2 from "../../images/svg-4.svg";
import Icon3 from "../../images/svg-5.svg";
import Icon4 from "../../images/svg-6.svg";
import Icon5 from "../../images/svg-7.svg";
import Icon6 from "../../images/svg-8.svg";
import {
  DepartmentsContainer,
  DepartmentsH1,
  DepartmentsWrapper,
  DepartmentsCard,
  DepartmentsIcon,
  DepartmentsH2,
  DepartmentLink,
  Icon,
} from "./DepartmentElements";

const Departments = () => {
  return (
    <DepartmentsContainer id="projectsandresearch">
      <Icon to="/">Incubation</Icon>
      <DepartmentsH1>Choose your Department</DepartmentsH1>
      
      <DepartmentsWrapper>
        <DepartmentsCard>
          <DepartmentLink to="/cse">
            <DepartmentsIcon src={Icon1} />
            <DepartmentsH2>CSE</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
        <DepartmentsCard>
          <DepartmentLink to="/ece">
            <DepartmentsIcon src={Icon2} />
            <DepartmentsH2>ECE</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
        <DepartmentsCard>
          <DepartmentLink to="/mech">
            <DepartmentsIcon src={Icon3} />
            <DepartmentsH2>MECH</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
        <DepartmentsCard>
          <DepartmentLink to="/civil">
            <DepartmentsIcon src={Icon4} />
            <DepartmentsH2>CIVIL</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
        <DepartmentsCard>
          <DepartmentLink to="/chem">
            <DepartmentsIcon src={Icon5} />
            <DepartmentsH2>CHEM</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
        <DepartmentsCard>
          <DepartmentLink to="/mme">
            <DepartmentsIcon src={Icon6} />
            <DepartmentsH2>MME</DepartmentsH2>
          </DepartmentLink>
        </DepartmentsCard>
      </DepartmentsWrapper>
    </DepartmentsContainer>
  );
};

export default Departments;
