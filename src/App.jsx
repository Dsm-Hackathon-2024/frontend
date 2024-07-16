import MainRouter from "./routes/MainRouter";
import { StyledProvider } from "./style/StyledProvider";

function App() {
  return (
    <StyledProvider>
      <MainRouter />
    </StyledProvider>
  );
}

export default App;
