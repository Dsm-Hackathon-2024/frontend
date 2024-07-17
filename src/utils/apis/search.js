import { instance } from "./axios";

const getSearch = async ItmsNm => {
  return instance.get(`invest/stocks/search?likeItmsNm=${ItmsNm}`);
};

export default getSearch;
