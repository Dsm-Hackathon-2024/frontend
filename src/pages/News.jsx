import styled from "styled-components";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom/dist";
import { useEffect, useState } from "react";
import { getNews } from "../utils/apis/news";
function News() {
  const navigate = useNavigate();
  const [newsData, setNewsData] = useState();

  function encodeURL(url) {
    const encodedURL = btoa(url);
    return encodedURL.replace("/", "-");
  }

  useEffect(() => {
    getNews()
      .then(res => {
        setNewsData(res.data.items);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

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
        <NewsContainer>
          {newsData?.map((news, index) => {
            return (
              <NewsBox
                key={index}
                onClick={() => {
                  navigate(`/news/${encodeURL(news.originallink)}`);
                }}
              >
                <NewsTitle>{news.title}</NewsTitle>
                <NewsContent>{news.description}</NewsContent>
              </NewsBox>
            );
          })}
        </NewsContainer>
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
  font-size: 24px;
  font-weight: 600;
  color: white;
`;

const NewsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(328px, 1fr);
  gap: 16px;
  padding-bottom: 50px;

  @media (min-width: 704px) {
    grid-template-columns: repeat(auto-fill, minmax(328px, 1fr));
  }
`;

const NewsBox = styled.div`
  background-color: ${theme.colors.black50};
  border-radius: 8px;
  padding: 16px;
  color: white;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const NewsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 20px;
`;

const NewsContent = styled.div`
  width: 100%;
  height: 84px;
  font-size: 12px;
  margin-top: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;
