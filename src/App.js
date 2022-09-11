import { Container, ThemeProvider } from "@mui/material";
import Appbar from "./Components/Appbar";
import Banner from "./Components/Banner";
import Products from "./Components/products";
import SliderPromotions from "./Components/promotions";
import theme from "./styles/theme/index";
import Footer from "./Components/Footer";
import AppDrawer from "./Components/drawer";
import { UIProvider } from "./Context/ui";
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth="100%" sx={{ background: "#fff" }}>
        <UIProvider>
          <Appbar />
          <Banner />
          <SliderPromotions />

          <Products />
          <Footer />
          <AppDrawer />
        </UIProvider>
      </Container>
    </ThemeProvider>
  );
};

export default App;
