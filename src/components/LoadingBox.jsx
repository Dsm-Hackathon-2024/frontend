import styled, { keyframes } from "styled-components";

const LoadingBox = () => {
  return (
    <Loading>
      <Spinner></Spinner>
    </Loading>
  );
};

export default LoadingBox;

const Loading = styled.div`
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent !important;
`;

const Spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  width: 30px;
  height: 30px;
  border: 2px solid gray;
  border-top: 2px solid black;
  border-radius: 50%;

  animation: ${Spin} 1s linear infinite;
`;
