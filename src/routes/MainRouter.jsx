import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Layout from "./Layout";
import MyPage from "../pages/MyPage";
import News from "../pages/News";
import NewsDetail from "../pages/NewsDetail";
import Details from "../pages/Details";
import { ThemeProvider } from "styled-components";
import theme from "../style/theme";

function MainRouter() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                <Login
                  title="로그인"
                  btnTitle="로그인"
                  footerMsg="아직 계정이 없으신가요?"
                  linkMsg="회원가입"
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Login
                  title="회원가입"
                  btnTitle="회원가입"
                  footerMsg="이미 계정이 있으신가요?"
                  linkMsg="로그인"
                />
              }
            />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/invest">
              <Route path=":id" element={<Details />} />
            </Route>
            <Route path="news">
              <Route index element={<News />} />
              <Route path=":id" element={<NewsDetail />} />
            </Route>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default MainRouter;
