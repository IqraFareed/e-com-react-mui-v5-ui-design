import { Button, Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import theme from "./styles/theme/index";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Appbar />
      </Container>
    </ThemeProvider>
  );
};

export default App;
