import CarouselComponent from "../components/CarouselComponent";
import ProductComponent from "../components/ProductComponent";
import styled from "styled-components";

const IndexComponent: React.FC = () => {
  return (
    <IndexContainer>
      <CarouselComponent />
      <ProductComponent />
    </IndexContainer>
  );
};

const IndexContainer = styled.div`
  background-color: ${({ theme }) => theme.body};
  transition: all 0.3s;
  min-width: 35rem;
`;

export default IndexComponent;
