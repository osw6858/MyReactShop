import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";

const ErrorPageComponent = () => {
  return (
    <Container>
      <Wrapper>
        <h2>404</h2>
        <p>페이지를 찾을 수 없습니다.</p>
        <ButtonComponent primary link="/">
          메인으로
        </ButtonComponent>
      </Wrapper>
    </Container>
  );
};

export default ErrorPageComponent;

const Container = styled.section`
  color: ${({ theme }) => theme.cardFontColor};
  background-color: ${({ theme }) => theme.body};
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s;
  min-height: calc(100vh - (32.8rem));
  min-width: 36rem;
  padding: 0 0 4rem 0;

  & > div > h2 {
    font-size: 15rem;
    font-weight: 800;
  }
  & > div > p {
    font-size: 5rem;
    font-weight: 400;
    margin-bottom: 3rem;

    @media ${(props) => props.theme.mobile} {
      font-size: 3rem;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  min-width: 32rem;
`;
