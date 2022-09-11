import { Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import Banner from "./Components/Banner";
import Products from "./Components/products";
import SliderPromotions from "./Components/promotions";
import theme from "./styles/theme/index";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="100%" sx={{ background: "#fff" }}>
        <Appbar />
        <Banner />
        <SliderPromotions />

        <Products />
        <Footer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
