import React from "react";
import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerTitle,
} from "../../styles/banner";
import image from "../../images/banner.png";
export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <BannerContainer>
      <BannerImage src={image} />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2">New bags</BannerTitle>
        <BannerDescription variant="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          urna dapibus, condimentum arcu quis, sagittis arcu.
        </BannerDescription>
      </BannerContent>
    </BannerContainer>
  );
}
