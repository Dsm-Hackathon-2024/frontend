import React, { useState, useEffect } from "react";
import axios from "axios";
import cheerio from "cheerio";
import styled, { keyframes } from "styled-components";
import { theme } from "../style/theme";
import { useLocation } from "react-router-dom/dist";

function NewsDetail() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const { pathname: path } = useLocation();

  function decodeURL(encodedURL) {
    return decodeURIComponent(encodedURL);
  }

  useEffect(() => {
    if (!path) return;

    const newsUrl = atob(path.split("/")[2]);

    scrapeNews(newsUrl)
      .then(([newsTitle, newsContent]) => {
        setTitle(newsTitle);
        setContent(newsContent);
        setIsLoading(false);
      })
      .catch(error => {
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  const scrapeNews = async url => {
    try {
      const response = await axios.get(
        `http://localhost:3001/proxy?url=${encodeURIComponent(url)}`
      );
      const htmlContent = response.data;

      const $ = cheerio.load(htmlContent);

      const newsTitle = $("h1").text().trim();

      const contentParagraphs = $("p");
      const newsContent = contentParagraphs
        .map((i, p) => $(p).text().trim())
        .get()
        .join("\n");

      return [newsTitle, newsContent];
    } catch (error) {
      console.error("Error scraping news:", error);
      return [null, null];
    }
  };

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
        <TextContainer>{title}</TextContainer>
        <ContentContainer>
          {content?.split("\n").map((text, index) => (
            <React.Fragment key={index}>
              {text}
              <br />
            </React.Fragment>
          ))}
        </ContentContainer>
        <ButtonContainer>
          <FinishButton>읽음</FinishButton>
        </ButtonContainer>
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
  overflow-y: auto;
  padding-bottom: 40px;
  flex: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TextContainer = styled.div`
  width: 74%;
  font-size: 24px;
  font-weight: 600;
  color: white;
  word-wrap: break-word;
  flex: none;
`;

const ContentContainer = styled.div`
  width: 100%;
  font-size: 12px;
  color: white;
  flex: none;

  @media screen and (min-width: 600px) {
    font-size: 16px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  flex: none;
`;

const FinishButton = styled.div`
  width: 328px;
  height: 44px;
  border-radius: 8px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  background-color: ${theme.colors.blue50};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

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
