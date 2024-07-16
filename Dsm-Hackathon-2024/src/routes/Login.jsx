import styled from "styled-components";

const InputId = styled.input`
  /* input */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  width: 328px;
  height: 72px;

  /* Frame 86 */

  /* Auto layout */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;

  width: 328px;
  height: 72px;

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
  display: flex;
  flex-direction: row;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 8px;

  position: absolute;
  width: 328px;
  height: 72px;

  color: #ffffff;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;

  /* Frame 85 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
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
    <>
      <InputId type="text" placeholder="아이디를 입력하세요" />
      <Password type="password" placeholder="비밀번호를 입력하세요" />
    </>
  );
}

export default Login;
