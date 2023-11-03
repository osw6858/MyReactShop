import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useEffect } from "react";
import { Product } from "../types/ProductsType";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetProducts } from "../Redux/Thunk";
import { Rate } from "antd";
import ButtonComponent from "./ButtonComponent";
import { addCart } from "../Redux/CartSlice";

const DetailComponent = () => {
  const { id } = useParams();
  const productList = useSelector((state: any) => state.product);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    if (productList.products.length === 0) {
      dispatch(asyncSetProducts());
    }
  }, []);

  const selectedItems = productList.products.filter(
    (item: Product) => Number(id) === item.id
  );

  const items = selectedItems[0];

  /*
  이 페이지는 비동기 통신 데이터를 전역으로 관리하지 않기 때문에 Thunk를 쓰지 않음
  const [item, setItem] = useState<Product>();
  useEffect(() => {
    const getProducts = async () => {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      response.data !== undefined && setItem(response.data);
    };

    getProducts();
  }, []);
  */
  const whatIsCategory = (items: Product) => {
    let categoryTitle: string = "";

    if (items !== undefined) {
      switch (items.category) {
        case "men's clothing":
          categoryTitle = "패션";
          break;
        case "women's clothing":
          categoryTitle = "패션";
          break;
        case "jewelery":
          categoryTitle = "액세서리";
          break;
        case "electronics":
          categoryTitle = "디지털";
          break;
      }
    }
    return categoryTitle;
  };

  const addCartItem = (item: Product) => {
    dispatch(addCart(item.id));
  };

  return (
    <Container>
      {items && (
        <ItemWrapper>
          <NavigateText>
            {whatIsCategory(items)} &gt; {items.title}
          </NavigateText>
          <ItemInform>
            <ImgBox>
              <StyledImg src={items.image} alt="Product" />
            </ImgBox>
            <InfomWrapper>
              <Title>
                {items.title} <NewIcon>New</NewIcon>
              </Title>
              <Description>{items.description}</Description>
              <Rate allowHalf defaultValue={items.rating.rate} disabled />
              <Rating>{items.rating.rate}</Rating>
              <Rating>/ {items.rating.count}참여</Rating>
              <Price>{items.price}$</Price>
              <ButtonComponent
                primary
                link=""
                clickFuc={() => addCartItem(items)}
              >
                장바구니에 담기
              </ButtonComponent>
              <ButtonComponent ghost link="/cart">
                장바구니로 이동
              </ButtonComponent>
            </InfomWrapper>
          </ItemInform>
        </ItemWrapper>
      )}
    </Container>
  );
};

export default DetailComponent;

const Container = styled.section`
  color: ${({ theme }) => theme.cardFontColor};
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  min-height: calc(100vh - (35.3rem));
  min-width: 36rem;
  padding-top: 2.5rem;
`;

const NavigateText = styled.div`
  color: ${({ theme }) => theme.cardFontColor};
  font-size: 1.3rem;
  margin: 2.5rem 0 5rem 0;
`;

const InfomWrapper = styled.div`
  padding: 0 3.5rem 3.5rem 3.5rem;
  margin-top: 2.5rem;

  & > button {
    margin-bottom: 2rem;
  }
`;

const ItemWrapper = styled.div`
  margin: 0 auto;
  max-width: 130rem;
`;

const ItemInform = styled.figure`
  display: flex;

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

const Description = styled.figcaption`
  font-size: 1.6rem;
  margin: 2rem 0 2rem 0;
`;

const NewIcon = styled.div`
  background-color: rgb(31, 178, 165);
  color: ${({ theme }) => theme.text};
  border-radius: 2rem;
  font-size: 1.4rem;
  font-weight: 900;
  padding: 0 1rem 0 1rem;
  margin-left: 2rem;
`;

const Rating = styled.span`
  font-size: 1.5rem;
  margin: 0 0.5rem 0 0.5rem;
`;

const Price = styled.div`
  font-size: 3rem;
  margin: 2rem 0 2rem 0;
`;

const ImgBox = styled.div`
  position: relative;
  background-color: white;
  border: 1px solid white;
  min-width: 28rem;

  height: 30rem;
  border-radius: 2rem;
  min-height: 25rem;
`;

const StyledImg = styled.img`
  position: absolute;
  height: 25rem;
  width: 25rem;
  object-fit: contain;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
