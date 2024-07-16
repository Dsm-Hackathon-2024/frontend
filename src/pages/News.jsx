import styled from "styled-components";
import { theme } from "../style/theme";

function News() {
  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>
          <div>
            경제 뉴스를 볼수록
            <br />
            포인트가 쌓여요! 🪙
          </div>
        </TextContainer>
      </CenterContainer>
    </Wrapper>
  );
}

export default News;

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
  font-size: 24px;
  font-weight: 600;
  color: white;
`;
