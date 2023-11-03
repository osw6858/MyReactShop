import { useTransition, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Product } from "../types/ProductsType";
import { Link, useNavigate } from "react-router-dom";

const SearchBarComponent = () => {
  const [, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const productList = useSelector((state: any) => state.product);
  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const input = e.target.value;

    setInputValue(input);

    startTransition(() => {
      setSearchQuery(input);
    });
  };

  return (
    <Container>
      <StyledInput
        value={inputValue}
        onChange={handleChange}
        placeholder="검색"
      ></StyledInput>
      <SearchList>
        {inputValue &&
          productList.products.map(
            (e: Product) =>
              e.title.includes(searchQuery) && (
                <StyledLink
                  key={e.id}
                  to={`/detail/${e.id}`}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      setInputValue("");
                      navigate(`/detail/${e.id}`);
                    }
                  }}
                >
                  <SearchResult onClick={() => setInputValue("")}>
                    {e.title}
                  </SearchResult>
                </StyledLink>
              )
          )}
      </SearchList>
    </Container>
  );
};

export default SearchBarComponent;

const Container = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  background-color: ${({ theme }) => theme.input};
  height: 5rem;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  color: #c3c7d6;
  padding: 0 1rem 0 1rem;
  border: none;

  &:focus {
    outline: none;
  }

  @media ${(props) => props.theme.mobile} {
    width: 94.65%;
  }
`;

const SearchList = styled.ul`
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.cardFontColor};
  position: absolute;
  display: grid;
  font-size: 1.5rem;
  gap: 2rem;
  max-height: 30rem;
  overflow-y: auto;
  padding: 2rem 0 2rem 0;
`;

const SearchResult = styled.li`
  padding: 0 1rem 0 1rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  pointer: cursor;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    transition: background-color 0.2s;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
