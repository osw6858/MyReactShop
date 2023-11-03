import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";
import { Carousel } from "react-responsive-carousel";
import { css } from "styled-components";
import ButtonComponent from "./ButtonComponent";
import fashion from "../assets/fashion.jpeg";
import food from "../assets/grocery.jpeg";
import digital from "../assets/digital.jpeg";

const CarouselComponent = () => {
  return (
    <Container>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
      >
        <ImgContainer>
          <InnerText>
            <h2>물빠진 청바지!</h2>
            <span>이제 막 도착한 패션 청바지를 구경해 보세요.</span>
            <ButtonComponent link="/fashion">바로가기</ButtonComponent>
          </InnerText>
          <img src={fashion} />
        </ImgContainer>
        <ImgContainer>
          <InnerText>
            <h2>신선한 식품!</h2>
            <span>농장 직배송으로 신선한 식료품을 만나보세요.</span>
            <ButtonComponent link="/food">바로가기</ButtonComponent>
          </InnerText>
          <img src={food} />
        </ImgContainer>
        <ImgContainer>
          <InnerText>
            <h2>신속한 업무처리!</h2>
            <span>다양한 디지털 상품을 둘러보세요.</span>
            <ButtonComponent link="/digital">바로가기</ButtonComponent>
          </InnerText>
          <img src={digital} />
        </ImgContainer>
      </Carousel>
    </Container>
  );
};

const TitleCenter = css`
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align left;
`;

const TitleFontSize = css`
  ${TitleCenter}
  h2 {
    font-size: 2.5rem;
    color: white;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }
`;

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgContainer = styled.div`
  height: 70rem;
  position: relative;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover;
  }

  @media ${(props) => props.theme.laptop} {
    height: 22rem;
  }

  @media ${(props) => props.theme.tablet} {
    height: 22rem;
  }

  @media ${(props) => props.theme.mobile} {
    height: 22rem;
  }
`;

const InnerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: transparent;
  position: absolute;
  z-index: 10;
  width: 70%;

  ${TitleCenter}

  h2 {
    font-size: 3.5rem;
    color: white;
    font-weight: 800;
    margin-bottom: 0.3rem;
  }

  span {
    font-size: 1.5rem;
    color: white;
    font-weight: 700;
    margin-bottom: 1.6rem;
  }

  @media ${(props) => props.theme.laptop} {
    ${TitleFontSize}
  }

  @media ${(props) => props.theme.tablet} {
    ${TitleFontSize}
  }

  @media ${(props) => props.theme.mobile} {
    ${TitleCenter}

    h2 {
      font-size: 2.8em;
      color: white;
      font-weight: 800;
      margin-bottom: 0.3rem;
    }

    span {
      font-size: 1.3rem;
      color: white;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }
  }
`;

export default CarouselComponent;
