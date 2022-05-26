import React, { useState, useEffect } from "react";
import { Container } from "../styledComponents/Container";
import Loader from "./Loader";
import { Response } from "../styledComponents/Response";
const axios = require("axios").default;
const headers = { "Content-Type": "application/json" };
const devUrl = "https://jsonplaceholder.typicode.com/todos/1";

const DevStageComponent = () => {
  const getResponse = async () => {
    try {
      const response = await axios.get(devUrl, { headers });

      if (response) {
        setLoading(true);
        setResp("hey there");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: DevStageComponent.js ~ line 20 ~ getResponse ~ error",
        error
      );
    }
  };
  useEffect(() => {
    getResponse();
  }, []);
  const [loading, setLoading] = useState(false);
  const [resp, setResp] = useState("");
  return (
    <Container middle>
      {loading ? <Loader /> : <Response>{resp}</Response>}
    </Container>
  );
};

export default DevStageComponent;
