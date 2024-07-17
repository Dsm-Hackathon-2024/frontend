import styled, { keyframes } from "styled-components";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom/dist";
import { ListItem } from "../components/ListItem";
import { useEffect, useState } from "react";
import { myInfo } from "../utils/apis/user";

function MyPage() {
  const link = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    myInfo()
      .then(res => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  if (isLoading) {
    return (
      <Wrapper>
        <LoadingSpinner />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>
          {data.name}님!
          <br />
          반가워요 😃
        </TextContainer>
        <PossessionContainer>
          <div>현재 소유 잔액</div>
          <div>
            <span>{data.point}</span>
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
        <RankingContainer>
          <div>소유 자산 순위</div>
          <div>
            <div>
              <div>나의 순위</div>
              <div>
                <UserBox sp={true}>
                  <div>
                    <div>{data.rank}</div>
                    <div>{data.name}</div>
                  </div>
                  <div>{data.point}원</div>
                </UserBox>
              </div>
            </div>
            <div>
              <div>Top 3</div>
              <div>
                <UserBox>
                  <div>
                    <div>{data.top3[0].rank}</div>
                    <div>{data.top3[0].name}</div>
                  </div>
                  <div>{data.top3[0].point}원</div>
                </UserBox>
                <UserBox>
                  <div>
                    <div>{data.top3[1].rank}</div>
                    <div>{data.top3[1].name}</div>
                  </div>
                  <div>{data.top3[1].point}원</div>
                </UserBox>
                <UserBox>
                  <div>
                    <div>{data.top3[2].rank}</div>
                    <div>{data.top3[2].name}</div>
                  </div>
                  <div>{data.top3[2].point}원</div>
                </UserBox>
              </div>
            </div>
          </div>
        </RankingContainer>
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

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingSpinner = styled.div`
  border: 4px solid ${theme.colors.black80};
  border-top: 4px solid ${theme.colors.blue50};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black80};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
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

const RankingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: white;
  > div:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    padding: 16px;
    width: 100%;
    height: 292px;
    border-radius: 16px;
    background-color: ${theme.colors.black50};
    display: flex;
    flex-direction: column;
    gap: 16px;
    > div {
      display: flex;
      flex-direction: column;
      gap: 8px;
      > div:nth-child(1) {
        font-size: 12px;
      }
      > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
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
  /* padding-bottom: 50px; */
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

const UserBox = styled.div`
  width: 100%;
  height: 46px;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  color: white;
  border-radius: 8px;
  background-color: ${({ sp }) =>
    sp ? theme.colors.black40 : theme.colors.black50};
  align-items: center;
  > div:nth-child(1) {
    display: flex;
    > div:nth-child(1) {
      font-size: 14px;
      font-weight: 600;
      margin-right: 16px;
    }
    > div:nth-child(2) {
      font-size: 12px;
      font-weight: 500;
    }
  }
  > div:nth-child(2) {
    font-size: 12px;
    font-weight: 500;
    color: ${theme.colors.blue50};
  }
`;
