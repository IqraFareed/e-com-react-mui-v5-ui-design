import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "../Appbar/Actions";
const AppbarMobile = ({ matches }) => {
  return (
    <div>
      <AppbarContainer>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <AppbarHeader textAlign={"center"} variant="h4">
          Shop Yah
        </AppbarHeader>
        <IconButton>
          <SearchIcon />
        </IconButton>
        <Actions matches={matches} />
      </AppbarContainer>
    </div>
  );
};

export default AppbarMobile;
