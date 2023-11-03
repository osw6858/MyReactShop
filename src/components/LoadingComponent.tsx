import styled from "styled-components";
//import { Skeleton } from "antd";
import { Spin } from "antd";

const LoadingComponent = () => {
  return (
    <Container>
      <Wrapper>
        {/* {[1, 2, 3, 4, 5].map((_, i) => (
          <div key={i}>
            <br />
            <Skeleton />
            <br />
          </div>
        ))} */}
        <Spin tip="로딩중..." size="large">
          <div className="content" />
        </Spin>
      </Wrapper>
    </Container>
  );
};

export default LoadingComponent;

const Container = styled.section`
  padding-top: 1rem;
  padding-bottom: 10rem;
  display: flex;
`;

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
  margin-top: 15rem;
`;
