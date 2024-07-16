import styled from "styled-components";
import { theme } from "../style/theme";
import { HomeButton } from "../components/HomeButton";
import { SearchIcon } from "../assets/SearchIcon";

function Search() {
  return (
    <Wrapper>
      <HomeButton />
      <CenterContainer>
        <TopContainer>
          <TextContainer>검색 🔎</TextContainer>
          <SearchBarContainer>
            <SearchBar placeholder="검색어를 입력해주세요" />
            <div>
              <SearchIcon size={20} color={theme.colors.black15} />
            </div>
          </SearchBarContainer>
        </TopContainer>
        <ListContainer>
          <div>검색 결과</div>
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

export default Search;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black80};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 68px 16px 0 16px;
  min-width: 360px;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  gap: 32px;
`;

const TextContainer = styled.div`
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
  > div:nth-child(1) {
    font-size: 20px;
    font-weight: 600;
  }
  > div:nth-child(2) {
    padding: 16px;
    border-radius: 16px 16px 0 0;
    background-color: ${theme.colors.black50};
    height: calc(100vh - 232px);
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

const SearchBarContainer = styled.div`
  width: 100%;
  height: 50px;
  overflow: hidden;
  position: relative;
  > div {
    position: absolute;
    right: 0;
    top: 12px;
  }
`;

const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid ${theme.colors.black15};
  background-color: rgba(0, 0, 0, 0);
  color: white;
  font-size: 14px;
  &::placeholder {
    color: ${theme.colors.black15};
  }
`;
