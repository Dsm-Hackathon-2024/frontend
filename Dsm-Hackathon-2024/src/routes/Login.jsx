import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const IdContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const PsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputId = styled.input`
  /* input */

  /* Auto layout */

  padding: 0px;
  gap: 8px;

  width: 328px;
  height: 72px;

  /* Frame 86 */

  /* Inside auto layout */
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  /* 아이디 */

  width: 32px;
  height: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Frame 85 */

  /* Auto layout */

  padding: 12px;

  width: 328px;

  background: #303030;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  /* 아이디를 입력하세요. */

  height: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
`;

const Password = styled.input`
  /* input_icon */

  /* Auto layout */

  padding: 0px;
  gap: 8px;

  width: 328px;
  height: 72px;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Frame 85 */

  /* Auto layout */

  padding: 12px;
  isolation: isolate;

  width: 328px;

  background: #303030;
  border-radius: 8px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;

  /* 비밀번호를 입력하세요. */

  height: 24px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  z-index: 0;

  background: #303030;
`;

function Login() {
  return (
    <Container>
      <IdContainer>
        <label for="Id">아이디</label>
        <InputId type="text" placeholder="아이디를 입력하세요" name="Id" />
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
