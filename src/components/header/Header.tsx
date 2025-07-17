import styled from "styled-components";
import greedySquareImage from "../../assets/greedySquareImage.jpg";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #017356;
  width: 100%;
  align-items: center;
  height: 10rem;
`;

const HeaderLogo = styled.img`
  width: 10rem;
  height: 10rem;
  margin-right: 4rem;
`;

const HeaderTitle = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: #fff;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={greedySquareImage} />
      <HeaderTitle>Greedy Todo List</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
