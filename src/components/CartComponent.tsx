import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { Product } from "../types/ProductsType";
import { useEffect, useState } from "react";
import { asyncSetProducts } from "../Redux/Thunk";
import { changCount } from "../Redux/CartSlice";
import ButtonComponent from "./ButtonComponent";
import ModalComoponent from "./ModalComponent";

interface CartState {
  count: number;
  id: number;
}

const CartComponent: React.FC = () => {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch<any>();

  const productList = useSelector((state: any) => state.product.products);
  const cart = useSelector((state: any) => state.cartList.cart);

  useEffect(() => {
    if (productList.length === 0) {
      dispatch(asyncSetProducts());
    }
  }, []);

  const cartItems = productList
    .map((product: Product) => {
      const matchingCartItem = cart.find(
        (cartItem: CartState) => cartItem.id === product.id
      );

      if (matchingCartItem) {
        return { ...product, count: matchingCartItem.count };
      }
      return null;
    })
    .filter((item: any) => item !== null);

  //console.log("결과", cartItems);

  const totalPrice = () => {
    const totoal = cartItems.reduce((acc: number, cur: any) => {
      return acc + cur.price * cur.count;
    }, 0);

    return Math.floor(totoal);
  };

  //console.log(cartItems.length);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <ItemWrapper>
        <NavigateText>홈 &gt; 장바구니</NavigateText>

        <CatListWrapper>
          <div>
            {cartItems.length > 0 ? (
              cartItems.map((item: any) => (
                <ItemInform key={item.id}>
                  <ImgBox>
                    <StyledImg src={item.image} />
                  </ImgBox>
                  <CountPriceInfrom>
                    <Title>{item.title}</Title>
                    <Price>
                      ${(item.price * item.count).toFixed(0)}{" "}
                      <span>(${item.price.toFixed(0)})</span>
                    </Price>
                    <Button
                      onClick={() =>
                        dispatch(
                          changCount({ itemId: item.id, changeAmount: -1 })
                        )
                      }
                    >
                      -
                    </Button>
                    <button>{item.count}</button>
                    <Button
                      onClick={() =>
                        dispatch(
                          changCount({ itemId: item.id, changeAmount: 1 })
                        )
                      }
                    >
                      +
                    </Button>
                  </CountPriceInfrom>
                </ItemInform>
              ))
            ) : (
              <EmptyCart>
                <h2>장바구니에 물품이 없습니다.</h2>
                <ButtonComponent primary link="/">
                  구매하러 가기
                </ButtonComponent>
              </EmptyCart>
            )}
          </div>
          <TotalPrice>
            <span style={{ marginRight: "1.5rem" }}> 총: ${totalPrice()}</span>
            <ButtonComponent link="" primary clickFuc={openModal}>
              구매하기
            </ButtonComponent>
          </TotalPrice>
        </CatListWrapper>
      </ItemWrapper>
      {modal && (
        <ModalComoponent closeModal={closeModal} count={cartItems.length} />
      )}
    </Container>
  );
};

export default CartComponent;

const Container = styled.section`
  color: ${({ theme }) => theme.cardFontColor};
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  min-height: calc(100vh - (42.8rem));
  min-width: 36rem;
  padding-bottom: 10rem;
`;

const ItemWrapper = styled.div`
  margin: 0 auto;
  width: 65%;

  @media ${(props) => props.theme.mobile} {
    width: auto;
  }
`;

const NavigateText = styled.div`
  color: ${({ theme }) => theme.cardFontColor};
  font-size: 1.3rem;
  margin: 2.5rem 0 5rem 2rem;
`;

const ImgBox = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid white;
  min-width: 23rem;

  height: 23rem;
  border-radius: 2rem;
`;

const StyledImg = styled.img`
  position: absolute;
  height: 19rem;
  width: 19rem;
  object-fit: contain;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ItemInform = styled.figure`
  display: flex;
  margin: 2rem 1.5rem 2rem 1.5rem;

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const CountPriceInfrom = styled.div`
  padding: 0 3.5rem 3.5rem 3.5rem;
  margin-top: 2.5rem;

  & > button {
    border: none;
    padding: 1rem 2rem;
    font-weight: 700;
  }
`;

const CatListWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.laptop} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
  }

  @media ${(props) => props.theme.mobile} {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 2rem 0;
`;

const Price = styled.div`
  font-size: 3rem;
  margin: 2rem 0 2rem 0;

  & > span {
    font-size: 2.3rem;
  }
`;

const TotalPrice = styled.div`
  display: flex;
  justify-content: right;
  max-height: 4rem;
  width: 33rem;
  align-items: center;
  font-size: 3rem;

  @media ${(props) => props.theme.laptop} {
    justify-content: left;
    margin: 3rem 0 0 2rem;
  }

  @media ${(props) => props.theme.tablet} {
    justify-content: left;
    margin: 3rem 0 0 2rem;
  }

  @media ${(props) => props.theme.mobile} {
    justify-content: left;
    margin: 3rem 0 0 2rem;
  }
`;

const Button = styled.button`
  background-color: rgb(102, 26, 230);
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background-color: rgb(102, 26, 230, 0.5);
    transition: background-color 0.2s;
  }
`;

const EmptyCart = styled.div`
  & > h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    margin-left: 2rem;
  }

  & > button {
    margin-left: 2rem;
    margin-bottom: 2rem;
  }
`;
