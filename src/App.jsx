import { useState, useEffect, useRef } from "react";
import MainRouter from "./routes/MainRouter";
import { StyledProvider } from "./style/StyledProvider";
import theme from "./style/theme";
import { addPoint } from "./utils/apis/user";
import { Cookie } from "./utils/cookie";
import styled from "styled-components";

function App() {
  const [wait, setWait] = useState(false);
  const [isGift, setIsGift] = useState(false);
  const [displayAmount, setDisplayAmount] = useState("0");
  const finalAmountRef = useRef(0);

  console.log(isGift);

  useEffect(() => {
    const checkGiftCookie = () => {
      const giftCookie = Cookie.get("gift");
      console.log("Gift cookie value:", giftCookie);
      console.log(1);
      if (giftCookie == "1") {
        console.log(2);
        setIsGift(true);
      }
    };

    checkGiftCookie();
  }, []);

  useEffect(() => {
    if (isGift) {
      console.log("isGift is true, starting gift process");
      setWait(true);
      const rand = Math.floor(Math.random() * (5000 - 1000 + 1) + 1000);
      finalAmountRef.current = rand;

      addPoint(rand)
        .then(() => {
          console.log("Point added successfully");
          animateNumber(rand);
        })
        .catch(error => {
          console.error("Error adding point:", error);
          setWait(false);
        })
        .finally(() => {
          Cookie.set("gift", "0");
        });
    }
  }, [isGift]);

  const animateNumber = targetNumber => {
    let current = 0;
    const increment = Math.ceil(targetNumber / 50);
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetNumber) {
        clearInterval(timer);
        setDisplayAmount(targetNumber.toString());
        setWait(false);
      } else {
        setDisplayAmount(current.toString());
      }
    }, 20);
  };

  const handleModalClick = () => {
    if (!wait) {
      setIsGift(false);
    }
  };

  return (
    <StyledProvider>
      {isGift && (
        <Modal onClick={handleModalClick}>
          <ModalContent>
            <span>{displayAmount}</span>원 획득했어요
          </ModalContent>
        </Modal>
      )}
      <MainRouter />
    </StyledProvider>
  );
}

export default App;

// ... (Modal과 ModalContent 스타일 컴포넌트는 이전과 동일)

const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  color: white;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  > span {
    color: ${theme.colors.red50};
  }
`;
