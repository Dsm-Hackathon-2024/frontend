import styled from "styled-components";
import { useState } from "react";
import theme from "../style/theme";

const Details = () => {
  const [invest, setInvest] = useState("Buy");

  const handleBuyClick = () => {
    setInvest("Buy");
  };

  const handleSellClick = () => {
    setInvest("Sell");
  };

  return (
    <View>
      <GraphSection>
        <Title invest={invest}>
          <span>삼성전자</span> 종목으로
          <br /> 모의 투자를 시작해보세요🎉
        </Title>
        <GraphBox></GraphBox>
      </GraphSection>
      <InvestSection>
        <ButtonGroup>
          <BuyButton invest={invest} onClick={handleBuyClick}>
            매수하기
          </BuyButton>
          <SellButton invest={invest} onClick={handleSellClick}>
            매도하기
          </SellButton>
        </ButtonGroup>
        <PointBox>
          <p>현재 jyk1029님은</p>
          <Point invest={invest}>
            <span>5</span>
            <span>원</span>
          </Point>
          <p>소유하고 있습니다.</p>
          <PointChargeButton>포인트 충전하러 가기</PointChargeButton>
        </PointBox>
        <QuantityBox>
          <p>매수 희망수량</p>
          <InputContainer>
            <PlusButton>+</PlusButton>
            <StocksInput type="text" inputmode="tel" invest={invest} />
            <MinusButton>-</MinusButton>
          </InputContainer>
        </QuantityBox>
        <TradingButton invest={invest}>매수</TradingButton>
      </InvestSection>
    </View>
  );
};

const View = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.black80};
  font-size: 12px;
  color: ${props => props.theme.colors.black0};
`;

const Title = styled.span`
  color: ${({ theme }) => theme.colors.black0};
  font-size: 24px;
  margin: 0px 16px;
  margin-top: 90px;
  & > span {
    color: ${({ theme, invest }) =>
      invest === "Buy" ? theme.colors.red50 : theme.colors.blue50};
  }
`;

const GraphSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;
  margin: 0 16px;
  box-sizing: border-box;
`;

const GraphBox = styled.div`
  background-color: white;
  width: 100%;
  height: 28vh;
`;

const InvestSection = styled.section`
  border-radius: 16px 16px 0 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black50};
  flex: 1;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const BuyButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, invest }) =>
    invest === "Buy" ? theme.colors.red50 : theme.colors.black40};
  padding: 8px 0px;
  color: ${({ theme, invest }) =>
    invest === "Buy" ? theme.colors.black0 : theme.colors.black15};
  flex: 1;
  border-radius: 26px;
  font-size: 12px;
`;

const SellButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: ${({ theme, invest }) =>
    invest === "Buy" ? theme.colors.black40 : theme.colors.blue50};
  padding: 8px 0px;
  color: ${({ theme, invest }) =>
    invest === "Buy" ? theme.colors.black15 : theme.colors.black0};
  flex: 1;
  border-radius: 26px;
  font-size: 12px;
`;

const PointBox = styled.div`
  background-color: ${({ theme }) => theme.colors.black40};
  border-radius: 16px;
  padding: 16px;
  gap: 8px;

  & > p {
    color: ${({ theme }) => theme.colors.black0};
    font-size: 12px;
  }
`;

const Point = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    font-size: 24px;
    color: ${({ theme, invest }) =>
      invest === "Buy" ? theme.colors.red50 : theme.colors.blue50};
  }
`;

const PointChargeButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.black15};
  color: ${({ theme }) => theme.colors.black0};
`;

const QuantityBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > button {
    font-size: 36px;
    font-weight: 900;
  }
`;

const PlusButton = styled.button`
  color: ${({ theme }) => theme.colors.black10};
  background-color: transparent;
`;

const StocksInput = styled.input`
  background-color: transparent;
  flex: 0.5;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.black0};
  border-bottom: 1px solid
    ${({ theme, invest }) =>
      invest === "Buy" ? theme.colors.red50 : theme.colors.blue50};
`;

const MinusButton = styled.button`
  color: ${({ theme }) => theme.colors.black10};
  background-color: transparent;
`;

const TradingButton = styled.button`
  margin-top: 20px;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  background-color: ${({ theme, invest }) =>
    invest === "Buy" ? theme.colors.red50 : theme.colors.blue50};
  color: ${({ theme }) => theme.colors.black0};
`;

export default Details;
