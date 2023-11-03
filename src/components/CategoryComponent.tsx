import styled from "styled-components";
import { useSelector } from "react-redux";
import CardComponent from "./CardComponent";
import { Product } from "../types/ProductsType";

interface Category {
  title: string;
  category: [string, string, ...string[]] | string;
  limit: number;
}

const CategoryComponent: React.FC<Category> = ({ title, category, limit }) => {
  const productList = useSelector((state: any) => state.product);

  let filterCategory;

  if (typeof category === "string") {
    filterCategory = productList.products.filter(
      (product: Product) => product.category === category
    );
  } else {
    filterCategory = productList.products.filter((product: Product) =>
      category.includes(product.category)
    );
  }

  const productArr: Product[] = filterCategory.slice(0, limit);

  return (
    <Container>
      <CategoryTitle>{title}</CategoryTitle>
      <Wrapper>
        <CardList>
          {productArr.map((product: Product) => (
            <CardComponent
              key={product.id}
              id={product.id}
              imageSrc={product.image}
              description={product.title}
              price={product.price}
            />
          ))}
        </CardList>
      </Wrapper>
    </Container>
  );
};

export default CategoryComponent;

const Container = styled.div`
  margin-top: 5rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.mobile} {
    overflow-x: scroll;
    overflow-y: clip;
    align-items: flex-start;
  }
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media ${(props) => props.theme.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${(props) => props.theme.mobile} {
    grid-template-columns: repeat(10, 1fr);
    margin-left: 1rem;
  }
`;

const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.text};
  font-size: 3.6rem;
  font-weight: 700;
  width: 15rem;
  margin: 0 auto;
  text-align: center;

  @media ${(props) => props.theme.laptop} {
    font-size: 3.3em;
  }
  @media ${(props) => props.theme.tablet} {
    font-size: 3em;
  }
  @media ${(props) => props.theme.mobile} {
    font-size: 2.3em;
    width: 10rem;
    margin-left: 2.5rem;
    text-align: left;
  }
`;
