import axios from "axios";

const getStockPrice = async () => {
  const response = await axios.get(
    "https://apis.data.go.kr/1160100/service/GetStockSecuritiesInfoService/getStockPriceInfo?serviceKey=o1HD8Bw2KAgLa2OhNix6eKL2Unl3JCd9AV2PQ%2FkvzWfL0nZ9y9NccXNkjAmiP9iQaLiDJHRKUWv6n%2FEkksqC0w%3D%3D&numOfRows=46&resultType=json&likeSrtnCd=005930"
  );
  const { data } = response;
  console.log(data);
  const stockData = data.response.body.items.item;

  let x = [];
  let high = [];
  let low = [];
  let open = [];
  let close = [];

  let lowestPrice = Infinity;
  let highestPrice = -Infinity;

  stockData.forEach(p => {
    x.push(p.basDt);
    high.push(Number(p.hipr));
    low.push(Number(p.lopr));
    open.push(Number(p.mkp));
    close.push(Number(p.clpr));

    lowestPrice = Math.min(lowestPrice, Number(p.lopr));
    highestPrice = Math.max(highestPrice, Number(p.hipr));
  });

  x.reverse();
  high.reverse();
  low.reverse();
  open.reverse();
  close.reverse();

  let info = {
    lowestPrice,
    highestPrice,
  };

  let trace = {
    x,
    high,
    low,
    open,
    close,
    decreasing: { line: { color: "blue" } },
    increasing: { line: { color: "red" } },
    line: { color: "rgba(31,119,180,1)" },
    type: "candlestick",
    xaxis: "x",
    yaxis: "y",
    hoverInfo: "text",
    text: "asdf",
  };

  return { trace, info };
};

export default getStockPrice;
