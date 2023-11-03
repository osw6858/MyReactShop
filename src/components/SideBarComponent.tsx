import styled, { keyframes } from "styled-components";
import { useEffect } from "react";

interface Props {
  handleSidbar: () => void;
  isOpen: boolean;
}

const SideBarComponent = ({ handleSidbar, isOpen }: Props) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <Container onClick={handleSidbar}>
      <SideMenuWrapper
        style={{ transform: `translateX(${isOpen ? "0" : "-100%"})` }}
        onClick={(event) => event.stopPropagation()}
      >
        <CloseButton onClick={handleSidbar}>X</CloseButton>
        <ul>
          <li>메뉴 항목 1</li>
          <li>메뉴 항목 2</li>
          <li>메뉴 항목 3</li>
        </ul>
      </SideMenuWrapper>
    </Container>
  );
};

export default SideBarComponent;

const SlideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Container = styled.div`
  width: 100%;
  min-width: 36rem;
  height: calc(100vh + (32.8rem));
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  z-index: 200;
  top: 0;
`;

const SideMenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 23rem;
  height: 100%;
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${SlideIn} 0.5s ease-in-out;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  color: background-color: ${({ theme }) => theme.text};
  font-size: 2rem;
  cursor: pointer;
`;
