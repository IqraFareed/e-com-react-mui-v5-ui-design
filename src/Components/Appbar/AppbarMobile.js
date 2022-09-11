import { IconButton } from "@mui/material";
import React from "react";
import { AppbarContainer, AppbarHeader } from "../../styles/appbar";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Actions from "../Appbar/Actions";
import { useUIContext } from "../../Context/ui";
const AppbarMobile = ({ matches }) => {
  const { setDrawerOpen } = useUIContext();
  return (
    <div>
      <AppbarContainer>
        <IconButton onClick={() => setDrawerOpen(true)}>
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
