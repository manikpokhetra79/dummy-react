import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: ${(props) => (props.middle ? "row" : "column")};
  justify-content: ${(props) => (props.middle ? "center" : "none")};
`;
export { Container };
