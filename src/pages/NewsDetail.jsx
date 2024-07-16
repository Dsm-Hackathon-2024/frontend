import styled from "styled-components";
import { theme } from "../style/theme";

function NewsDetail() {
  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>국내 주식형펀드서 사흘째 자금 순유출</TextContainer>
      </CenterContainer>
    </Wrapper>
  );
}

export default NewsDetail;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black80};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90px 16px 0 16px;
  min-width: 360px;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const TextContainer = styled.div`
  width: 74%;
  font-size: 24px;
  font-weight: 600;
  color: white;
  word-wrap: break-word;
`;
