import { Stack } from "@mui/system";
import React from "react";
import {
  Product,
  ProductActionButton,
  ProductActionWrapper,
  ProductAddCart,
  ProductFavButton,
  ProductImage,
} from "../../styles/Products";
import ProductMeta from "./ProductMeta";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FitScreenIcon from "@mui/icons-material/FitScreen";
const SingleProduct = ({ product, matches }) => {
  return (
    <>
      <Product>
        <ProductImage src={product?.image} />
        <ProductMeta product={product} matches={matches} />
        <ProductActionWrapper>
          <Stack direction="row">
            <ProductFavButton isFav={0}>
              <FavoriteIcon />
            </ProductFavButton>
            <ProductActionButton>
              <ShareIcon color="primary" />
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenIcon color="primary" />
            </ProductActionButton>
          </Stack>
        </ProductActionWrapper>
      </Product>
      <ProductAddCart variant="contained">Add to cart</ProductAddCart>
    </>
  );
};

export default SingleProduct;
