import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncSetProducts } from "../Redux/ProductSlice";
import CategoryComponent from "./CategoryComponent";
import LoadingComponent from "./LoadingComponent";

const ProductComponent: React.FC = () => {
  const isLoading = useSelector((state: any) => state.product.loading);
  //console.log(isLoading);
  const dispatch = useDispatch<any>();
  const productList = useSelector((state: any) => state.product);

  /*
  불러올 전체 상품수가 적기에 Redux-Thunk를 사용해 초기 데이터 전체 상태관리
  -> 초기에 데이터를 불러와 저장하면이후 페이지 이동 속도가 매우 빠름
  -> 다만 초기 데이터가 많다면 페이지 뜨는게 느림
  초기 데이터가 많다면 일반적으로 axios로 데이터 불러와서 사용할것
  */
  useEffect(() => {
    if (productList.products.length === 0) {
      dispatch(asyncSetProducts());
    }
  }, []);

  return (
    <Container>
      {isLoading === "complete" ? (
        <>
          <CategoryComponent
            title="패션"
            category={["men's clothing", "women's clothing"]}
            limit={4}
          />
          <CategoryComponent title="액세서리" category="jewelery" limit={4} />
          <CategoryComponent title="디지털" category="electronics" limit={4} />
        </>
      ) : (
        <LoadingComponent />
      )}
    </Container>
  );
};

// title -> 렌더링 페이지 타이틀
// category -> 어떤 카테고리를 렌더링하고 싶은지
// limit -> 렌더링할 상품 갯수(api호출시 거는 limit이 아님)

const Container = styled.section`
  padding-top: 1rem;
  padding-bottom: 10rem;
  min-width: 32rem;
  //opacity: 0;
  //transition: all 0.5s;
`;

export default ProductComponent;

// const productList = useSelector((state: any) => state.product);

// const result = productList.products.reduce((acc: any, cur: any) => {
//   // eslint-disable-next-line no-prototype-builtins
//   if (acc.hasOwnProperty(cur.category)) {
//     return {
//       ...acc,
//       [cur.category]: [...acc[cur.category], cur],
//     };
//   } else {
//     return {
//       ...acc,
//       [cur.category]: [cur],
//     };
//   }
// }, {});

// console.log(result);
//카테고리가 매우 많을 경우 데이터를 카테고리별로 분류하여 map을 돌려도 좋을듯
