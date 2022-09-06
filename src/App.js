import { Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import Banner from "./Components/Banner";
import SliderPromotions from "./Components/promotions";
import theme from "./styles/theme/index";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="100%" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
        <SliderPromotions />
      </Container>
    </ThemeProvider>
  );
};

export default App;
