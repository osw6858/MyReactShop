import styled from "styled-components";
import { Link } from "react-router-dom";

interface CardData {
  imageSrc: string;
  description: string;
  price: number;
  id: number;
}

const CardComponent: React.FC<CardData> = ({
  imageSrc,
  description,
  price,
  id,
}) => {
  // const isLoading = useSelector((state: any) => state.product.loading);
  // console.log(isLoading);
  return (
    <StyledLink to={`/detail/${id}`}>
      <CardContainer>
        <ImgContainer>
          <ProductImage src={imageSrc} alt="Product" />
        </ImgContainer>
        <ProdictTitleContainer>
          <ProductDescription>{description}</ProductDescription>
          <ProductPrice>${price.toFixed(0)}</ProductPrice>
        </ProdictTitleContainer>
      </CardContainer>
    </StyledLink>
  );
};

export default CardComponent;

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.card};
  border: ${({ theme }) => theme.cardBorder};
  border-radius: 1rem 1rem 0 0;
  margin-top: 2rem;

  @media ${(props) => props.theme.mobile} {
    min-width: 23rem;
  }
`;

const ImgContainer = styled.figure`
  background-color: white;
  border-radius: 1rem 1rem 0 0;
  position: relative;
  min-height: 25rem;
`;

const ProductImage = styled.img`
  position: absolute;
  width: 15rem;
  height: 15rem;
  object-fit: contain;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translate(-50%, -50%) scale(1.2);
  }
`;

const ProdictTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  height: 10rem;
`;

const ProductDescription = styled.figcaption`
  max-width: 25rem;
  padding: 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.cardFontColor};
`;

const ProductPrice = styled.p`
  padding: 1rem;
  font-size: 2rem;
  color: ${({ theme }) => theme.cardFontColor};
  font-weight: 600;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
