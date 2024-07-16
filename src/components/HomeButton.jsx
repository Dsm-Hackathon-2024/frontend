import styled from "styled-components";
import { HomeIcon } from "../assets/HomeIcon";
import { theme } from "../style/theme";
// import { useNavigate } from "react-router-dom";

export const HomeButton = () => {
  // const link = useNavigate();

  return (
    <Wrapper>
      <Container
        onClick={() => {
          // link("/");
        }}
      >
        <HomeIcon size={24} color={theme.colors.black15} />
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  max-width: 1000px;
  padding: 16px;
  top: 0;
`;

const Container = styled.div`
  cursor: pointer;
`;
