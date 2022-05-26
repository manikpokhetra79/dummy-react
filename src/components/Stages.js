import React from "react";
import { Link, Outlet } from "react-router-dom";
import PageHeader from "./PageHeader";
import { LinksContainer } from "../styledComponents/LinksContainer";
const Stages = () => {
  return (
    <>
      <PageHeader text={"Access Stage Apis"} />
      <LinksContainer primary>
        <Link to="/stages/dev">Development</Link>
        <Link to="/stages/test">Testing</Link>
        <Link to="/stages/prod">Production</Link>
      </LinksContainer>
      <Outlet />
    </>
  );
};

export default Stages;
