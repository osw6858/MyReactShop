import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

interface btnText {
  children: string;
  link: string;
  primary?: boolean;
  ghost?: boolean;
  clickFuc?: () => void;
}
const ButtonComponent = ({
  children,
  link,
  primary,
  ghost,
  clickFuc,
}: btnText) => {
  const navigate = useNavigate();

  const handdleClick = () => {
    if (clickFuc) {
      clickFuc();
    } else if (link) {
      navigate(link);
    }
  };

  if (primary) {
    return <PromaryButton onClick={handdleClick}>{children}</PromaryButton>;
  } else if (ghost) {
    return <GhostButton onClick={handdleClick}>{children}</GhostButton>;
  } else {
    return <StyledButton onClick={handdleClick}>{children}</StyledButton>;
  }
};

const DefaultTheme = css`
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-right: 1rem;
  font-weight: 700;
`;

const PromaryButton = styled.button`
  background-color: rgb(102, 26, 230);
  color: #fff;
  border: none;
  ${DefaultTheme}

  &:hover {
    background-color: rgb(102, 26, 230, 0.5);
    transition: background-color 0.2s;
  }
`;

const GhostButton = styled.button`
  border: ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.cardFontColor};
  background-color: transparent;
  ${DefaultTheme};

  &:hover {
    background-color: #111;
    color: white;
    transition: background-color 0.2s;
  }
`;

const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.button};
  color: #fff;
  border: none;
  ${DefaultTheme}

  &:hover {
    background-color: #111;
    transition: background-color 0.2s;
  }
`;

export default ButtonComponent;
