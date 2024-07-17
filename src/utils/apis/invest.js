import { instance } from "./axios";

export const postStockBuy = async (stockName, quantity, price, roc) => {
  return instance
    .post(`invest/stocks/buy`, {
      name: stockName,
      quantity: quantity,
      price: price,
      roc: roc,
    })
    .then(res => alert("성공적으로 구매했습니다"))
    .catch(err => {
      console.log(err);
      switch (err.response.data.message) {
        case "Invalid quantity":
          alert("유효한 구매 수량이 아닙니다");
        case "Insufficient points to buy stocks":
          alert("보유한 포인트가 부족합니다");
      }
    });
};

export const postStockSell = async (stockName, quantity, price, roc) => {
  return instance
    .post(`invest/stocks/sell`, {
      name: stockName,
      quantity: quantity,
      price: price,
      roc: roc,
    })
    .then(res => alert("성공적으로 판매했습니다"))
    .catch(err => {
      console.log(err);
      switch (err.response.data.message) {
        case "User does not own enough stocks to sell":
          alert("유효한 판매 수량이 아닙니다");
      }
    });
};

export const getAllStock = async () => {
  return instance.get(`invest/stocks`);
};

export const getStockDetails = async itemName => {
  return instance.get(`invest/stocks/detail?itmsNm=${itemName}`);
};
