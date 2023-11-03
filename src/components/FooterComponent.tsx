import styled from "styled-components";

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      {" "}
      <Test>footer</Test>
    </Footer>
  );
};

export default FooterComponent;

const Footer = styled.footer`
  background-color: ${({ theme }) => theme.header};
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
  height: 25rem;
  min-width: 36rem;
  transition: all 0.3s;
`;

const Test = styled.h2`
  font-size: 5rem;
`;

//********************footer부터 작업 들어가기!!!!********************
