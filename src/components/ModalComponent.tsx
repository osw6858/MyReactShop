import styled from "styled-components";
import ButtonComponent from "./ButtonComponent";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../Redux/CartSlice";

interface Props {
  closeModal: () => void;
  count: number;
}

const ModalComoponent = ({ closeModal, count }: Props) => {
  const dispatch = useDispatch<any>();
  //console.log(count);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleCartList = () => {
    dispatch(removeCart());
    closeModal();
  };

  return (
    <Container>
      <ContentWrapper>
        <TextWrapper>
          <h2>정말로 구매 하시겠습니까?</h2>
          <p>장바구니의 모든 상품이 삭제됩니다.</p>
        </TextWrapper>
        <ButtonWrapper>
          <ButtonComponent primary link="" clickFuc={handleCartList}>
            네
          </ButtonComponent>
          <ButtonComponent link="" clickFuc={closeModal}>
            아니오
          </ButtonComponent>
        </ButtonWrapper>
      </ContentWrapper>
      {count <= 0 && (
        <ContentWrapper>
          <TextWrapper>
            <h2>장바구니에 상품이 없습니다.</h2>
            <p>쇼핑하러 갈까요?</p>
          </TextWrapper>
          <ButtonWrapper>
            <ButtonComponent primary link="/">
              네
            </ButtonComponent>
            <ButtonComponent link="" clickFuc={closeModal}>
              아니오
            </ButtonComponent>
          </ButtonWrapper>
        </ContentWrapper>
      )}
    </Container>
  );
};

export default ModalComoponent;

const Container = styled.div`
  width: 100%;
  min-width: 36rem;
  height: 100%; //calc(100vh + (32.8rem));
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 200;
  top: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  width: 20%;
  min-width: 30rem;
  z-index: 300;
  border: ${({ theme }) => theme.cardBorder};
  background-color: ${({ theme }) => theme.body};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 100;
  border-radius: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextWrapper = styled.div`
  margin: 2.5rem;

  & > h2 {
    font-size: 2rem;
  }
  & > p {
    font-size: 1.4rem;
  }
`;
