import { Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import FormComp from "./FormComp";
import { InformationPageDiv, FormDiv } from "./formStyled";
import InfoHeader from "./InfoHeader";

const InformationPage = () => {
  return (
    <InformationPageDiv>
      <div>
        <div className="main">
          <InfoHeader />
          <FormComp />
        </div>

        <div className="sidebar"></div>
      </div>
    </InformationPageDiv>
  );
};

export default InformationPage;
