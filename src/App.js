import { Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import Banner from "./Components/Banner";
import theme from "./styles/theme/index";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
      </Container>
    </ThemeProvider>
  );
};

export default App;
