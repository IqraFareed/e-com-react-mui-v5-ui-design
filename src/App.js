import { Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import Banner from "./Components/Banner";
import Products from "./Components/products";
import SliderPromotions from "./Components/promotions";
import theme from "./styles/theme/index";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="100%" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
        <SliderPromotions />

        <Products />
      </Container>
    </ThemeProvider>
  );
};

export default App;
