import styled from "styled-components";
import { theme } from "../style/theme";
import { useEffect, useState } from "react";
import { SearchIcon } from "../assets/SearchIcon";
import { useNavigate } from "react-router-dom/dist";
import { UserIcon } from "../assets/UserIcon";
import { ListItem } from "../components/ListItem";
import { myInfo } from "../utils/apis/user";
import { getAllStock } from "../utils/apis/invest";
import LoadingBox from "../components/LoadingBox";

function Home() {
  const [selectedList, setSelectedList] = useState(0);
  const [stocksList, setStocksList] = useState();
  const link = useNavigate();
  const [_myInfo, setMyInfo] = useState({
    name: "",
  });

  useEffect(() => {
    myInfo()
      .then(res => {
        setMyInfo(res.data);
      })
      .catch(err => {
        console.error(err);
      });
    getAllStock()
      .then(res => {
        setStocksList(res.data.stocks);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <Wrapper>
      <CenterContainer>
        <TextContainer>
          <div>{_myInfo.name}님 환영합니다!</div>
          <div>
            <div>
              MOTOO 에서
              <br />
              투자를 경험해보세요🔥
            </div>
            <span
              onClick={() => {
                link("/mypage");
              }}
            >
              <UserIcon size={40} color={theme.colors.black15} />
            </span>
          </div>
        </TextContainer>
        <RecommendContainer>
          <div>AI가 추천한 {_myInfo.name}님의 종목은</div>
          <div>
            <div>기아</div>
            <div>유한양행우</div>
            <div>CJ대한통운</div>
          </div>
        </RecommendContainer>
        <ListContainer>
          <div>주식 리스트</div>
          <div>
            <MenuList>
              <Menu
                isSelected={selectedList === 0}
                onClick={() => {
                  setSelectedList(0);
                }}
              >
                주가
              </Menu>
              <Menu
                isSelected={selectedList === 1}
                onClick={() => {
                  setSelectedList(1);
                }}
              >
                급상승
              </Menu>
              <Menu
                isSelected={selectedList === 2}
                onClick={() => {
                  setSelectedList(2);
                }}
              >
                급하락
              </Menu>
            </MenuList>
            <div
              style={{
                cursor: "pointer",
              }}
              onClick={() => {
                link("/search");
              }}
            >
              <SearchIcon size={20} color={theme.colors.black15} />
            </div>
          </div>
          <div>
            {(stocksList &&
              selectedList === 0 &&
              stocksList
                .sort((a, b) => Number(a.clpr) - Number(b.clpr))
                .map((stock, idx) => {
                  return (
                    <a
                      href={`/invest?name=${stock.itmsNm}&price=${stock.clpr}&roc=${stock.fltRt}`}
                    >
                      <ListItem key={idx} isMinus={stock.fltRt < 0}>
                        <div>
                          <div>{idx + 1}</div>
                          <div>{stock.itmsNm}</div>
                        </div>
                        <div>
                          <div>{stock.clpr}원</div>
                          <div>
                            {stock.fltRt.replace(/(?<!\d)(-?)\./, "$10.")}
                          </div>
                        </div>
                      </ListItem>
                    </a>
                  );
                })) ||
              (selectedList === 1 &&
                stocksList
                  .sort((a, b) => Number(b.fltRt) - Number(a.fltRt))
                  .map((stock, idx) => {
                    return (
                      <a
                        href={`/invest?name=${stock.itmsNm}&price=${stock.clpr}&roc=${stock.fltRt}`}
                      >
                        <ListItem key={idx} isMinus={stock.fltRt < 0}>
                          <div>
                            <div>{idx + 1}</div>
                            <div>{stock.itmsNm}</div>
                          </div>
                          <div>
                            <div>{stock.clpr}원</div>
                            <div>{stock.fltRt}</div>
                          </div>
                        </ListItem>
                      </a>
                    );
                  })) ||
              (selectedList === 2 &&
                stocksList
                  .sort((a, b) => Number(a.fltRt) - Number(b.fltRt))
                  .map((stock, idx) => {
                    return (
                      <a
                        href={`/invest?name=${stock.itmsNm}&price=${stock.clpr}&roc=${stock.fltRt}`}
                      >
                        <ListItem key={idx} isMinus={stock.fltRt < 0}>
                          <div>
                            <div>{idx + 1}</div>
                            <div>{stock.itmsNm}</div>
                          </div>
                          <div>
                            <div>{stock.clpr}원</div>
                            <div>{stock.fltRt}</div>
                          </div>
                        </ListItem>
                      </a>
                    );
                  }))}
            {!stocksList && <LoadingBox />}
          </div>
        </ListContainer>
      </CenterContainer>
    </Wrapper>
  );
}

export default Home;

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
  padding: 68px 16px 0 16px;
  min-width: 360px;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  gap: 20px;
`;

const TextContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  > div:nth-child(1) {
    font-size: 12px;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      font-size: 24px;
      font-weight: 600;
    }
    > span {
      cursor: pointer;
      margin-right: 10px;
      @media screen and (min-width: 600px) {
        margin-right: 0px;
      }
    }
  }
`;

const RecommendContainer = styled.div`
  width: 100%;
  height: 84px;
  background-color: ${theme.colors.black50};
  border-radius: 16px;
  padding: 16px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div:nth-child(1) {
    font-size: 12px;
    font-weight: 400;
    width: 100%;
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 8px;
    overflow-y: hidden;
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    }
    & > div {
      font-size: 12px;
      padding: 8px 24px;
      height: 30px;
      border-radius: 8px;
      flex: none;
      @media screen and (min-width: 600px) {
        flex: 1;
      }
      display: flex;
      justify-content: center;
      align-items: center;
    }
    & > div:nth-child(1) {
      background-color: ${theme.colors.blue95};
    }
    & > div:nth-child(2) {
      background-color: ${theme.colors.blue80};
    }
    & > div:nth-child(3) {
      background-color: ${theme.colors.blue50};
    }
  }
`;

const ListContainer = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  > div:nth-child(1) {
    font-size: 24px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0 10px 0;
  }
  > div:nth-child(3) {
    position: relative;
    padding: 16px;
    border-radius: 16px 16px 0 0;
    background-color: ${theme.colors.black50};
    height: calc(100vh - 360px);
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

const MenuList = styled.div`
  display: flex;
  gap: 12px;
`;

const Menu = styled.div`
  height: 46px;
  border-bottom: 2px solid
    ${({ isSelected }) => (isSelected ? theme.colors.blue50 : "white")};
  color: ${({ isSelected }) => (isSelected ? theme.colors.blue50 : "white")};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s ease-in-out;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-size: 14px;
  font-weight: 600;
`;
