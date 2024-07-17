import { instance } from "./axios";

export const postStockBuy = async (stockName, quantity, price, roc) => {
  return instance
    .post(`invest/stocks/buy`, {
      name: stockName,
      quantity: quantity,
      price: price,
      roc: roc,
    })
    .catch(err => {
      console.log(err);
    });
};

export const postStockSell = async (stockName, quantity, price, roc) => {
  return instance.post(`invest/stocks/sell`, {
    name: stockName,
    quantity: quantity,
    price: price,
    roc: roc,
  });
};

export const getAllStock = async () => {
  return instance.get(`invest/stocks`);
};

export const getStockDetails = async (itemName) => {
  return instance.get(`invest/stocks/detail?itmsNm=${itemName}`);
};
