import styled from "styled-components";

function Login() {
  return (
    <>
      <Container>
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
      </Container>
    </>
  );
}

export default Login;

const Title = styled.h1`
  font-family: "Semi Bold";
  color: #ffffff;
  font-size: 32px;
  padding-bottom: 20px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 100vh;
  background-color: #131313;
  padding-top: 60px;

  & > h1 {
    @media screen and (max-width: 500px) {
      margin-right: 235px;
    }
  }
`;
const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PsContainer = styled(IdContainer)``;

const Input = styled.input`
  /* input */

  /* Auto layout */

  padding: 10px;
  display: flex;
  align-items: center;
  width: 308px;
  height: 72px;
  border-radius: 8px;
  background: #303030;
  color: #d8ddff;

  height: 24px;

  color: #ffffff;

  &::placeholder {
    color: #ffffff;
  }
`;

const Label = styled.label`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #ffffff;
`;

const Password = styled(Input)``;
