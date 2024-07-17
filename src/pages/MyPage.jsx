import styled from "styled-components";
import { theme } from "../style/theme";
import CoinIcon from "../assets/CoinIcon";
import { useNavigate } from "react-router-dom/dist";
import { ListItem } from "../components/ListItem";

function MyPage() {
  const link = useNavigate();

  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>
          jyk1029님!
          <br />
          반가워요 😃
        </TextContainer>
        <PossessionContainer>
          <div>현재 소유 잔액</div>
          <div>
            <span>10,000,000</span>
            <span>원</span>
          </div>
          <div
            onClick={() => {
              link("/news");
            }}
          >
            포인트 충전하러 가기
          </div>
        </PossessionContainer>
        <ListContainer>
          <div>내가 투자한 종목</div>
          <div>
            {Array.from({ length: 15 }).map(() => {
              return (
                <ListItem>
                  <div>
                    <div>1</div>
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
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 50px;
  > div:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    padding: 16px;
    border-radius: 16px 16px 0 0;
    background-color: ${theme.colors.black50};
    height: calc(100vh - 322px);
    padding-bottom: 70px;
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

const PossessionContainer = styled.div`
  width: 100%;
  height: 134px;
  padding: 16px 14px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${theme.colors.black40};
  border-radius: 16px;
  color: white;
  flex: none;
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
  > div:nth-child(3) {
    width: 100%;
    max-width: 500px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
    background-color: ${theme.colors.black15};
    border-radius: 8px;
    align-self: center;
  }
`;
