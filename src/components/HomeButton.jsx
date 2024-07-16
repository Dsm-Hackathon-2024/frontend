import styled from "styled-components";
import { HomeIcon } from "../assets/HomeIcon";
import { theme } from "../style/theme";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom/dist";

export const HomeButton = () => {
  const link = useNavigate();
  const { pathname: path } = useLocation();

  if (path === "/home" || path === "/" || path === "/signup") return null;

  return (
    <Wrapper>
      <Container>
        <span
          onClick={() => {
            link("/home");
          }}
        >
          <HomeIcon size={24} color={theme.colors.black15} />
        </span>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 50px;
  padding: 16px;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  cursor: pointer;
  max-width: 968px;
  width: 100%;
`;
