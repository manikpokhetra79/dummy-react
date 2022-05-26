import styled from "styled-components";
const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
const LinksContainer = styled.h4`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    text-decoration: none;
    color: ${(props) => (props.primary ? "tomato" : "palevioletred")};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 2px solid ${(props) => (props.primary ? "tomato" : "palevioletred")};
    border-radius: 3px;
    &:hover {
      color: white;
      background: ${(props) => (props.primary ? "tomato" : "palevioletred")};
    }
  }
`;
export { LinksContainer, Button, TomatoButton };
