import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 12px;
  width: 100vw;
  height: 100vh;
`;
const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  /* input */

  /* Auto layout */

  padding: 10px;

  width: 328px;
  height: 72px;
  border-radius: 8px;
  background: #303030;
  color: #d8ddff;

  /* 아이디를 입력하세요. */

  height: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;
`;

const Label = styled.label;

const Password = styled(Input)``;

function Login() {
  return (
    <Container>
      <IdContainer>
        <label for="Id">아이디</label>
        <Input type="text" placeholder="아이디를 입력하세요" name="Id" />
      </IdContainer>
      <PsContainer>
        <label for="Ps">비밀번호</label>
        <Password
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="Ps"
        />
      </PsContainer>
    </Container>
  );
}

export default Login;
