import { Button, Container, ThemeProvider } from "@mui/material";
import theme from "./styles/theme/index";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xl" sx={{ background: "#fff" }}>
        <Button color="secondary">hello</Button>
      </Container>
    </ThemeProvider>
  );
};

export default App;
