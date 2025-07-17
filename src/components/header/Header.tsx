import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;
`;

const HeaderLogo = styled.img`
  width: 16rem;
  height: 16rem;
`;

const HeaderTitle = styled.h1`
  font-size: 2rem;
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
