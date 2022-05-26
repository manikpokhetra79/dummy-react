import React from "react";
import styled from "styled-components";

const Pageheader = styled.h2`
  text-align: center;
`;

const PageHeader = (props) => {
  return (
    <>
      <Pageheader>{props.text}</Pageheader>
    </>
  );
};

export default PageHeader;
