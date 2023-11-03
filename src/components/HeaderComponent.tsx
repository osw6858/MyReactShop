import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setDark } from "../Redux/ThemeSlice";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchBarComponent from "./SearchBarComponent";
import { useState } from "react";
import SideBarComponent from "./SideBarComponent";

const HeadComponents: React.FC = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [sidBar, setSidBar] = useState(false);

  const dispatch = useDispatch();

  const theme = useSelector((state: any) => state.theme);

  const cart = useSelector((state: any) => state.cartList.cart);

  //console.log(cart);

  const handleThemeToggle = () => {
    dispatch(setDark());
  };

  const handleSearchBar = () => {
    setOpenSearch(!openSearch);
  };

  const handleSidBarOpen = () => {
    setSidBar(true);
  };

  const handleSidBarClose = () => {
    setSidBar(false);
  };

  //{cart.length > 0 ? cart.length : null}

  return (
    <StyledHeader>
      {sidBar && (
        <SideBarComponent isOpen={sidBar} handleSidbar={handleSidBarClose} />
      )}
      <LeftItmes>
        <StyledSvg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
          onClick={handleSidBarOpen}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </StyledSvg>
        <StyledLink to="/">
          <Title>React Shop</Title>
        </StyledLink>

        <StyledLink to="/fashion">
          <Itme>패션</Itme>
        </StyledLink>

        <StyledLink to="/accessory">
          <Itme>액세서리</Itme>
        </StyledLink>

        <StyledLink to="/digital">
          <Itme>디지털</Itme>
        </StyledLink>
      </LeftItmes>
      <RightItem>
        {theme.dark ? (
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-brightness-high"
            viewBox="0 0 16 16"
            onClick={handleThemeToggle}
          >
            <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
          </StyledSvg>
        ) : (
          <StyledSvg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-moon"
            viewBox="0 0 16 16"
            onClick={handleThemeToggle}
          >
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z" />
          </StyledSvg>
        )}
        <DesktopSearchBar>
          <SearchBarComponent />
        </DesktopSearchBar>
        <SearchSvg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
          onClick={handleSearchBar}
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </SearchSvg>
        <StyledLink to="/cart">
          <CartIconWrapper>
            <StyledSvg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-bag"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </StyledSvg>
            {cart.length > 0 ? (
              <Notification>{cart.length}</Notification>
            ) : null}
          </CartIconWrapper>
        </StyledLink>
      </RightItem>
      {openSearch && (
        <MobilSearchBar>
          <SearchBarComponent />
        </MobilSearchBar>
      )}
    </StyledHeader>
  );
};

export default HeadComponents;

const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.header};
  color: ${({ theme }) => theme.text};
  position: sticky;
  top: 0;
  z-index: 100;
  min-height: 7rem;
  transition: all 0.3s;
  min-width: 35rem;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0.4rem;

  @media ${(props) => props.theme.tablet} {
    justify-content: space-between;
  }

  @media ${(props) => props.theme.mobile} {
    justify-content: space-between;
  }
`;

const StyledSvg = styled.svg`
  width: 2.5rem;
  height: 2.5rem;
  transition: all 0.3s;
  fill: currentColor;
  display: blocks;
  margin: 0 1.3rem 0 1.3rem;
  cursor: pointer;
`;

const SearchSvg = styled(StyledSvg)`
  display: none;

  @media ${(props) => props.theme.mobile} {
    display: block;
  }
`;

const LeftItmes = styled.div`
  display: flex;
  align-items: center;

  svg {
    display: none;
  }

  @media ${(props) => props.theme.tablet} {
    margin-left: 0.3rem;
    svg {
      display: block;
    }
  }

  @media ${(props) => props.theme.mobile} {
    margin-left: 0.3rem;
    svg {
      display: block;
    }
  }
`;

const RightItem = styled.div`
  display: flex;
  align-items: center;

  @media ${(props) => props.theme.tablet} {
    margin-right: 0.3rem;
  }

  @media ${(props) => props.theme.mobile} {
    margin-right: 0.3rem;
  }
`;

const Itme = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  padding-left: 1.2rem;
  padding-right: 1.2rem;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }

  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

const CartIconWrapper = styled.div`
  position: relative;
`;

const Notification = styled.div`
  color: white;
  position: absolute;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: red;
  text-align: center;
  font-size: 1.3rem;

  top: -0.8rem;
  right: 0;
`;

const DesktopSearchBar = styled.div`
  @media ${(props) => props.theme.mobile} {
    display: none;
  }
`;

const MobilSearchBar = styled.div`
  display: none;
  @media ${(props) => props.theme.mobile} {
    display: block;
    position: absolute;
    left: 0;
    bottom: -5rem;
    width: 100%;
  }
`;
