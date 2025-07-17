import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
`;

const HeaderLogo = styled.img`
  width: 100px;
  height: 100px;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo />
      <HeaderTitle />
    </HeaderContainer>
  );
};

export default Header;
