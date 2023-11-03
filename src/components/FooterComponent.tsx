import styled from "styled-components";
import visa from "../assets/visa.svg";
import express from "../assets/express.svg";
import dinerClub from "../assets/dinerClub.svg";
import paypal from "../assets/paypal.svg";
import master from "../assets/master.svg";
import discover from "../assets/discover.svg";
import { Link } from "react-router-dom";

const FooterComponent: React.FC = () => {
  return (
    <Footer>
      <Wrapper>
        <p>Woong</p>
        <CardContainer>
          <img src={visa} alt="VisacardIcon" />
          <img src={master} alt="VisacardIcon" />
          <img src={paypal} alt="VisacardIcon" />
          <img src={dinerClub} alt="VisacardIcon" />
          <img src={express} alt="VisacardIcon" />
          <img src={discover} alt="VisacardIcon" />
        </CardContainer>
        <SnsContainer>
          <StyledLink
            to="https://www.facebook.com/?locale=ko_KR"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path
                id="path4"
                d="m17 2v4h-2c-0.69 0-1 0.81-1 1.5v2.5h3v4h-3v8h-4v-8h-3v-4h3v-4a4 4 0 0 1 4 -4h3z"
              ></path>
            </svg>
          </StyledLink>
          <StyledLink to="https://www.instagram.com/" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 512 512"
              className="fill-current"
            >
              <path d="M256,49.471c67.266,0,75.233.257,101.8,1.469,24.562,1.121,37.9,5.224,46.778,8.674a78.052,78.052,0,0,1,28.966,18.845,78.052,78.052,0,0,1,18.845,28.966c3.45,8.877,7.554,22.216,8.674,46.778,1.212,26.565,1.469,34.532,1.469,101.8s-0.257,75.233-1.469,101.8c-1.121,24.562-5.225,37.9-8.674,46.778a83.427,83.427,0,0,1-47.811,47.811c-8.877,3.45-22.216,7.554-46.778,8.674-26.56,1.212-34.527,1.469-101.8,1.469s-75.237-.257-101.8-1.469c-24.562-1.121-37.9-5.225-46.778-8.674a78.051,78.051,0,0,1-28.966-18.845,78.053,78.053,0,0,1-18.845-28.966c-3.45-8.877-7.554-22.216-8.674-46.778-1.212-26.564-1.469-34.532-1.469-101.8s0.257-75.233,1.469-101.8c1.121-24.562,5.224-37.9,8.674-46.778A78.052,78.052,0,0,1,78.458,78.458a78.053,78.053,0,0,1,28.966-18.845c8.877-3.45,22.216-7.554,46.778-8.674,26.565-1.212,34.532-1.469,101.8-1.469m0-45.391c-68.418,0-77,.29-103.866,1.516-26.815,1.224-45.127,5.482-61.151,11.71a123.488,123.488,0,0,0-44.62,29.057A123.488,123.488,0,0,0,17.3,90.982C11.077,107.007,6.819,125.319,5.6,152.134,4.369,179,4.079,187.582,4.079,256S4.369,333,5.6,359.866c1.224,26.815,5.482,45.127,11.71,61.151a123.489,123.489,0,0,0,29.057,44.62,123.486,123.486,0,0,0,44.62,29.057c16.025,6.228,34.337,10.486,61.151,11.71,26.87,1.226,35.449,1.516,103.866,1.516s77-.29,103.866-1.516c26.815-1.224,45.127-5.482,61.151-11.71a128.817,128.817,0,0,0,73.677-73.677c6.228-16.025,10.486-34.337,11.71-61.151,1.226-26.87,1.516-35.449,1.516-103.866s-0.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.151a123.486,123.486,0,0,0-29.057-44.62A123.487,123.487,0,0,0,421.018,17.3C404.993,11.077,386.681,6.819,359.866,5.6,333,4.369,324.418,4.079,256,4.079h0Z"></path>
              <path d="M256,126.635A129.365,129.365,0,1,0,385.365,256,129.365,129.365,0,0,0,256,126.635Zm0,213.338A83.973,83.973,0,1,1,339.974,256,83.974,83.974,0,0,1,256,339.973Z"></path>
              <circle cx="390.476" cy="121.524" r="30.23"></circle>
            </svg>
          </StyledLink>
          <StyledLink to="https://github.com/osw6858" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </StyledLink>
        </SnsContainer>
        <span>Copyright © 2022 Zero Base</span>
      </Wrapper>
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
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 3rem;
  place-items: center;
  color: ${({ theme }) => theme.cardFontColor};

  & > p {
    font-size: 1.5rem;
  }

  & > span {
    font-size: 1.2rem;
  }
`;

const CardContainer = styled.div`
  & > img {
    margin: 0 0.3rem 0 0.3rem;
  }
`;
const SnsContainer = styled.div`
  & > a > svg {
    fill: ${({ theme }) => theme.cardFontColor};
    margin: 0 1rem 0 1rem;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
