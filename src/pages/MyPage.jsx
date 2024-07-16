import styled from "styled-components";
import { theme } from "../style/theme";
import CoinIcon from "../assets/CoinIcon";
import { useNavigate } from "react-router-dom/dist";

function MyPage() {
  const link = useNavigate();

  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>
          <div>
            jyk1029님!
            <br />
            반가워요 😃
          </div>
          <span
            onClick={() => {
              link("/news");
            }}
          >
            <CoinIcon size={40} color={theme.colors.black15} />
          </span>
        </TextContainer>
        <PossessionContainer>
          <div>현재 소유 잔액</div>
          <div>
            <span>10,000,000</span>
            <span>원</span>
          </div>
        </PossessionContainer>
        <ListContainer>
          <div>내가 투자한 종목</div>
          <div>
            {Array.from({ length: 10 }).map(() => {
              return (
                <ListItem>
                  <div>
                    <div>1</div>
                    <div></div>
                    <div>삼성전자</div>
                  </div>
                  <div>
                    <div>87,600원</div>
                    <div>+0.92%</div>
                  </div>
                </ListItem>
              );
            })}
          </div>
        </ListContainer>
      </CenterContainer>
    </Wrapper>
  );
}

export default MyPage;

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    font-size: 24px;
    font-weight: 600;
    color: white;
  }
  > span {
    cursor: pointer;
    margin-right: 10px;
    @media screen and (min-width: 600px) {
      margin-right: 0px;
    }
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  > div:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    padding: 16px;
    border-radius: 16px 16px 0 0;
    background-color: ${theme.colors.black50};
    height: calc(100vh - 254px);
    padding-bottom: 30px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    > div:first-child {
      background-color: ${theme.colors.black40};
    }
  }
`;

const ListItem = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  > div:nth-child(1) {
    color: white;
    display: flex;
    align-items: center;
    gap: 12px;
    > div:nth-child(1) {
      font-size: 14px;
      font-weight: 600;
    }
    > div:nth-child(2) {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: gray;
    }
    > div:nth-child(3) {
      font-size: 12px;
      font-weight: 500;
    }
  }
  > div:nth-child(2) {
    display: flex;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    > div:nth-child(1) {
      color: white;
    }
    > div:nth-child(2) {
      color: ${theme.colors.red50};
    }
  }
`;

const PossessionContainer = styled.div`
  width: 100%;
  height: 84px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.black40};
  border-radius: 16px;
  color: white;
  > div:nth-child(1) {
    font-size: 12px;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    > span {
      font-size: 24px;
      font-weight: 600;
    }
  }
`;
