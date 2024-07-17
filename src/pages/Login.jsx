import styled from "styled-components";
import theme from "../style/theme";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import HideIcon from "../assets/HideIcon";
import EyeIcon from "../assets/EyeIcon";
import { login, signUp } from "../utils/apis/auth";

function Login({ title, btnTitle, footerMsg, linkMsg }) {
  const [psType, setPsType] = useState(true);
  const [psIcon, setPsIcon] = useState(true);

  const [data, setData] = useState({
    name: "",
    password: "",
  });

  const link = useNavigate();

  const { name, password } = data;

  const onChange = e => {
    let { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const resetValue = () => {
    setData({
      name: "",
      password: "",
    });
  };
  const onLogin = () => {
    login(data)
      .then(res => {
        link("/home");
        Cookie.set("accessToken", res.data.accessToken);
      })
      .catch(err => {
        alert("로그인에 실패했습니다.");
        console.log(err);
        resetValue;
      });
  };

  const onSignUp = () => {
    signUp(data)
      .then(res => {
        link("/");
        Cookie.set("accessToken", res.data.accessToken);
      })
      .catch(err => {
        alert("회원가입에 실패했습니다.");
        console.log(err);
        resetValue;
      });
  };

  const onClick = () => {
    setPsType(!psType);
    setPsIcon(!psIcon);
  };
  return (
    <Container>
      <LoginField>
        <Title>{title}</Title>
        <IdContainer>
          <Label for="name">아이디</Label>
          <Input
            type="text"
            placeholder="아이디를 입력하세요"
            name="name"
            onChange={onChange}
            value={name}
          />
        </IdContainer>
        <PsContainer>
          <Label for="password">비밀번호</Label>
          <div style={{ position: "relative" }}>
            <Password
              type={psType ? "password" : "text"}
              placeholder="비밀번호를 입력하세요"
              name="password"
              onChange={onChange}
              value={password}
            />
            <PasswordIcon onClick={onClick}>
              {psIcon ? <HideIcon /> : <EyeIcon />}
            </PasswordIcon>
          </div>
        </PsContainer>
      </LoginField>
      <Footer>
        <LoginBtn onClick={btnTitle === "로그인" ? onLogin : onSignUp}>
          {btnTitle}
        </LoginBtn>
        <FooterMsg>
          {footerMsg}
          <Link
            to={linkMsg === "로그인" ? "/" : "/signup"}
            onClick={resetValue}
          >
            {linkMsg}
          </Link>
        </FooterMsg>
      </Footer>
    </Container>
  );
}

export default Login;

const PasswordIcon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 8px;
  cursor: pointer;
`;

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
`;

const Footer = styled.footer``;

const LoginBtn = styled.button`
  /* fill-button */
  width: 308px;
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
  text-align: center;

  /* Black/0 */
  color: ${theme.colors.black0};

  &:hover {
    background: ${theme.colors.blue80};
  }
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
