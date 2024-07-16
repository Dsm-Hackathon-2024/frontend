import styled from "styled-components";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom/dist";

const dummyNews = [
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    title: "국내 주식형펀드서 사흘째 자금 순유출",
    content:
      "국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd",
    id: "id",
  },
  {
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqQBAUYBAfwyvGCTBMkq6e3XTWiA5MPXBRg&s",
    title: "국내 주식형펀드서 사흘째 자금 순유출",
    content:
      "국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd",
    id: "id",
  },
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    title: "국내 주식형펀드서 사흘째 자금 순유출",
    content:
      "국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd",
    id: "id",
  },
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    title: "국내 주식형펀드서 사흘째 자금 순유출",
    content:
      "국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd",
    id: "id",
  },
  {
    imgUrl:
      "data:image/jpeg;base64,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",
    title: "국내 주식형펀드서 사흘째 자금 순유출",
    content:
      "국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd국내 주식 형 펀드에서 사흘째 자금이 빠져나갔다. 26일 금융투자협회에 따르면 지난 22일 상장지수펀드(ETF)를 제외한 국내 주식형 펀드에서 126억원이 순유출됐다. 472억원이 들어오고 598억원이 펀드.sdfsadfsafasdfaffffffffffffffffffddddddddddddddddd",
    id: "id",
  },
];

function News() {
  const link = useNavigate();

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
          {dummyNews.map((news, index) => {
            return (
              <NewsBox
                key={index}
                onClick={() => {
                  link(`/news/${news.id}`);
                }}
              >
                <ImageContainer>
                  <StyledImage src={news.imgUrl} alt={news.title} />
                </ImageContainer>
                <NewsTitle>{news.title}</NewsTitle>
                <NewsContent>{news.content}</NewsContent>
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
  grid-template-columns: 1fr;
  gap: 16px;

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
  height: 320px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 156px;
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  flex-shrink: 0;
`;

const NewsTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-top: 12px;
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
