import styled from "styled-components";
import theme from "../style/theme";

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
        </Footer>
      </Container>
    </>
  );
}

export default Login;

const LoginField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.black80};
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
  background: ${({ theme }) => theme.colors.blue50};
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
  color: ${({ theme }) => theme.colors.black0};
`;

const Title = styled.h1`
  font-family: "Semi Bold";
  color: ${({ theme }) => theme.colors.black0};
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
  padding: 10px;
  display: flex;
  align-items: center;
  width: 308px;
  height: 72px;
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.black50};

  height: 24px;

  color: ${({ theme }) => theme.colors.black0};

  &::placeholder {
    color: ${({ theme }) => theme.colors.black0};
  }
`;

const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black0};
`;

const Password = styled(Input)``;
