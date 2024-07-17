import styled from "styled-components";
import theme from "../style/theme";

export const ListItem = styled.div`
  width: 100%;
  height: 46px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  flex: none;
  > div:nth-child(1) {
    color: white;
    display: flex;
    align-items: center;
    gap: 12px;
    > div:nth-child(1) {
      font-size: 14px;
      font-weight: 600;
    }
    > div:nth-child(2) {
      font-size: 12px;
      font-weight: 500;
    }
  }
  > div:nth-child(2) {
    display: flex;
    gap: 6px;
    font-size: 12px;
    font-weight: 500;
    > div:nth-child(1) {
      color: white;
    }
    > div:nth-child(2) {
      color: ${theme.colors.red50};
    }
  }
`;
