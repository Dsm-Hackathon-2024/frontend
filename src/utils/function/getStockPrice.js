import { getStockDetails } from "../apis/invest";

const getStockPrice = async itemName => {
  const response = await getStockDetails(itemName);
  const { data } = response;
  console.log(data);
  const stockData = data.stocks;

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
  };

  return { trace, info };
};

export default getStockPrice;
