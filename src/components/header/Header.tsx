import styled from "styled-components";
import greedySquareImage from "../../assets/greedySquareImage.jpg";
import COLORS from "../../constants/color";
import TEXTS from "../../constants/texts";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${COLORS.primary};
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
  color: ${COLORS.white};
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={greedySquareImage} alt="greedySquareImage" />
      <HeaderTitle>{TEXTS.todoTemplateTitle}</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;
