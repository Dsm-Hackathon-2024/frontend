import styled from "styled-components";
import { useEffect, useState } from "react";
import Plot from "react-plotly.js";
import getStockPrice from "../utils/function/getStockPrice";
import { useSearchParams, Link } from "react-router-dom/dist";
import { postStockBuy, postStockSell } from "../utils/apis/invest";
import { getUserInfo, getUserInvest } from "../utils/apis/user";
import LoadingBox from "../components/LoadingBox";
import { myInvest as _myInvest } from "../utils/apis/user";
import { getObjectByName } from "../function/getObjectByName";
import theme from "../style/theme";

const Details = () => {
  const [invest, setInvest] = useState("Buy");
  const [stockTrace, setStockTrace] = useState();
  const [stockInfo, setStockInfo] = useState();
  const [myStock, setMyStock] = useState();
  const [layout, setLayout] = useState();
  const [inputValue, setInputValue] = useState("0주");
  const [userInfo, setUserInfo] = useState();
  const [myInvest, setmyInvest] = useState();

  const [searchParams] = useSearchParams();
  const queryName = searchParams.get("name");
  const queryPrice = searchParams.get("price");
  const queryRoc = searchParams.get("roc");

  const getStockData = async () => {
    const data = await getStockPrice(queryName);
    setStockTrace(data.trace);
    setStockInfo(data.info);
  };
  const getMyPoint = async () => {
    const { data } = await getUserInfo();
    setUserInfo(data);
  };
  const getMyInvest = async () => {
    const { data } = await getUserInvest();
    setmyInvest(data.filter(iv => iv.name === queryName));
  };

  useEffect(() => {
    getMyInvest();
    getMyPoint();
    getStockData();
  }, []);

  useEffect(() => {
    stockInfo &&
      stockTrace &&
      setLayout({
        paper_bgcolor: theme.colors.black80,
        plot_bgcolor: theme.colors.black80,
        dragmode: "zoom",
        showlegend: false,
        xaxis: {
          autorange: true,
          domain: [0, 1],
          range: [stockTrace.x[0], stockTrace.x[stockTrace.x.length - 1]],
          type: "category",
          tickvals: stockTrace.x.filter((x, index) => index % 9 === 0),
          ticktext: ["06:00", "10:00", "14:00", "18:00", "22:00", "02:00"],
          rangeslider: {
            visible: false,
          },
        },
        yaxis: {
          autorange: true,
          domain: [0, 1],
          range: [stockInfo.lowestPrice * 0.95, stockInfo.highestPrice * 1.05],
          type: "linear",
          side: "right",
        },
        responsize: true,
        margin: {
          t: 10,
          r: 30,
          l: 30,
          b: 30,
        },
      });
    console.log(stockInfo);
  }, [stockInfo, stockTrace]);

  useEffect(() => {
    _myInvest().then(res => {
      setMyStock(res.data);
    });
  });

  const handleBuyClick = () => {
    setInvest("Buy");
  };

  const handleSellClick = () => {
    setInvest("Sell");
  };

  const handlePlusClick = () => {
    const prev = inputValue;
    const rawValue = Number(prev.replace(/\s?주$/, "").replace(/,/g, ""));
    const formattedValue = formatNumber(`${rawValue + 1}`);
    setInputValue(`${formattedValue} 주`);
  };

  const handleMinusClick = () => {
    const prev = inputValue;
    const rawValue = Number(prev.replace(/\s?주$/, "").replace(/,/g, ""));
    const formattedValue = formatNumber(`${rawValue - 1}`);
    if (formattedValue <= -1) return;
    setInputValue(`${formattedValue} 주`);
  };

  const formatNumber = num => {
    if (!num) return "";
    num = num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num;
  };

  const handleInputChange = e => {
    const inputValue = e.target.value.replace(/[^0-9]/g, ""); // 숫자만 남기기
    if (inputValue === "") {
      setInputValue(""); // 입력값이 없으면 빈 문자열로 설정
    } else {
      const formattedValue = formatNumber(inputValue);
      setInputValue(`${formattedValue}`);
    }
  };

  const handleInputFocus = e => {
    const currentValue = e.target.value;
    // ' 주'를 제거한 숫자 부분만 추출
    const rawValue = currentValue.replace(/\s?주$/, "").replace(/,/g, "");
    setInputValue(rawValue);
  };

  const handleInputBlur = e => {
    const currentValue = e.target.value;
    // 포맷팅된 값을 다시 설정
    const formattedValue = formatNumber(currentValue);
    setInputValue(formattedValue ? `${formattedValue} 주` : "");
  };

  const handleTradingClick = async e => {
    const invest = e.target.getAttribute("invest");
    const quantity = inputValue.replace(/\s?주$/, "").replace(/,/g, "");

    if (invest === "Buy") {
      await postStockBuy(
        queryName,
        Number(quantity),
        Number(queryPrice),
        Number(queryRoc)
      )
        .then(() => {
          setInputValue("0 주");
          getMyPoint();
        })
        .catch(err => console.log(err));
    } else if (invest === "Sell") {
      await postStockSell(
        queryName,
        Number(quantity),
        Number(queryPrice),
        Number(queryRoc)
      ).then(() => {
        setInputValue("0 주");
        getMyPoint();
      });
    }
  };

  return (
    <_Wrapper>
      <View>
        <GraphSection>
          <Title invest={invest}>
            <span>{queryName}</span> 종목으로
            <br /> 모의 투자를 시작해보세요🎉
          </Title>
          <GraphBox>
            {stockInfo && stockTrace && (
              <Plot
                data={[stockTrace]}
                layout={layout}
                useResizeHandler={true}
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundColor: theme.colors.black80,
                }}
                config={{ displayModeBar: false }}
              />
            )}
            {(!stockInfo || !stockTrace) && <LoadingBox />}
          </GraphBox>
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
            <p>현재 {userInfo?.name}님은</p>
            <Point invest={invest}>
              <span>{userInfo?.points}</span>
              <span>원</span>
            </Point>
            <p>소유하고 있습니다.</p>
            <Link to="/news">
              <PointChargeButton>포인트 충전하러 가기</PointChargeButton>
            </Link>
          </PointBox>
          <QuantityBox>
            <p>
              {invest === "Buy" ? "매수" : "매도"} 희망수량 (현재 보유 수량 :{" "}
              {Object(getObjectByName(myStock, queryName)).quantity || 0}
              {myInvest?.quantity}주)
            </p>
            <InputContainer>
              <PlusButton onClick={handlePlusClick}>+</PlusButton>
              <StocksInput
                type="text"
                invest={invest}
                value={inputValue}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <MinusButton onClick={handleMinusClick}>-</MinusButton>
            </InputContainer>
          </QuantityBox>
          <TradingButton invest={invest} onClick={handleTradingClick}>
            {invest === "Buy" ? "매수" : "매도"}
          </TradingButton>
        </InvestSection>
      </View>
    </_Wrapper>
  );
};

const _Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.black80};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const View = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0 16px 0 16px;
  min-width: 360px;
  max-width: 1000px;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  background-color: ${props => props.theme.colors.black80};
  font-size: 12px;
  color: ${props => props.theme.colors.black0};
`;

const Wrapper = styled.div``;

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
  background-color: ${({ theme }) => theme.colors.black80};
  width: 100%;
  height: 28vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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
