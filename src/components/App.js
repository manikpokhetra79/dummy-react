import React from "react";
import PageHeader from "./PageHeader";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Container } from "../styledComponents/Container";
const App = () => {
  return (
    <Container>
      <PageHeader text={"Devops on serverless"} />
      <Header />
      <Outlet />
    </Container>
  );
};

export default App;
