import styled from "styled-components";
import theme from "../style/theme";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <Container>
        <LoginField>
          <Title>로그인</Title>
          <IdContainer>
            <Label for="Id">아이디</Label>
            <Input type="text" placeholder="아이디를 입력하세요" name="Id" />
          </IdContainer>
          <PsContainer>
            <Label for="Ps">비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 입력하세요"
              name="Ps"
            />
          </PsContainer>
        </LoginField>
        <Footer>
          <LoginBtn>로그인</LoginBtn>
          <FooterMsg>
            아직 계정이 없으신가요?
            <Link to={"/signup"}>회원가입</Link>
          </FooterMsg>
        </Footer>
      </Container>
    </>
  );
}

export default Login;

const FooterMsg = styled.p`
  color: ${theme.colors.black0};
  font-family: "Light";
  font-size: 12px;
  text-align: center;
  box-sizing: border-box;
  margin-bottom: 50px;
  margin-top: 10px;
  & > a {
    color: ${theme.colors.blue50};
    margin: 10px;
    &:visited {
      color: ${theme.colors.blue50};
    }
  }
`;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Container = styled.div`
  background-color: ${theme.colors.black80};
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  & > h1 {
    @media screen and (max-width: 500px) {
      margin-right: 235px;
    }
  }

  @media screen and (max-width: 500px) {
    width: 100vw;
    height: 100vh;
  }
`;

const Footer = styled.footer``;

const LoginBtn = styled.button`
  /* fill-button */

  width: 328px;
  height: 44px;
  cursor: pointer;

  /* Blue/500(main) */
  background: ${theme.colors.blue50};
  border-radius: 8px;

  /* 로그인 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  text-align: center;

  /* Black/0 */
  color: ${theme.colors.black0};
`;

const Title = styled.h1`
  font-family: "Semi Bold";
  color: ${theme.colors.black0};
  font-size: 32px;
  box-sizing: border-box;
  margin-top: 60px;
`;

const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PsContainer = styled(IdContainer)``;
const Input = styled.input`
  padding: 20px;
  display: flex;
  align-items: center;
  width: 308px;
  height: 72px;
  border-radius: 8px;
  background: ${theme.colors.black50};

  height: 24px;

  color: ${theme.colors.black0};

  &::placeholder {
    color: ${theme.colors.black0};
  }
`;

const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${theme.colors.black0};
`;

const Password = styled(Input)``;
