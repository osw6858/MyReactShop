import styled from "styled-components";
import CategoryComponent from "./CategoryComponent";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetProducts } from "../Redux/Thunk";

interface Props {
  title: string;
  category: [string, string, ...string[]] | string;
}

const AllProductComponent = ({ title, category }: Props) => {
  const productList = useSelector((state: any) => state.product);
  const dispatch = useDispatch<any>();
  useEffect(() => {
    if (productList.products.length === 0) {
      dispatch(asyncSetProducts());
    }
  }, []);
  return (
    <Container>
      <CategoryComponent title={title} category={category} limit={100} />
    </Container>
  );
};

export default AllProductComponent;

const Container = styled.section`
  color: ${({ theme }) => theme.cardFontColor};
  background-color: ${({ theme }) => theme.body};
  display: flex;
  justify-content: center;
  transition: all 0.3s;
  min-height: calc(100vh - (37.8rem));
  min-width: 36rem;
  padding: 1rem 0 4rem 0;

  & > div {
    @media ${(props) => props.theme.mobile} {
      overflow-x: auto;
      align-items: center;
      margin: 5rem 1rem 5rem 1rem;
    }
    & > div {
      @media ${(props) => props.theme.mobile} {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`;
