import { useTheme } from "@mui/material/styles";
import { Grid, useMediaQuery, Container } from "@mui/material";
import React from "react";
import { products } from "../../data";
import SingleProduct from "./SingleProduct";
import Header from "./Header";
import SingleProductDesktop from "./SingleProductDesktop";
const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const renderProducts = products.map((product) => (
    <Grid
      item
      key={product.id}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      xs={2}
      sm={4}
      md={4}
    >
      {matches ? (
        <SingleProduct product={product} matches={matches} />
      ) : (
        <SingleProductDesktop product={product} matches={matches} />
      )}
    </Grid>
  ));
  return (
    <Container>
      <Header />
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 3 }}
        justifyContent={"center"}
        sx={{
          margin: "20px 4px 10px 4px",
        }}
        paddingX={{ xs: 4, md: 2 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {renderProducts}
      </Grid>
    </Container>
  );
};

export default Products;
