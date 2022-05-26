import React from "react";
import { Link } from "react-router-dom";
import { LinksContainer } from "../styledComponents/LinksContainer";
const Header = () => {
  return (
    <div>
      <LinksContainer>
        <Link to="/">Home</Link> <Link to="/stages">Stages</Link>
      </LinksContainer>
    </div>
  );
};

export default Header;
