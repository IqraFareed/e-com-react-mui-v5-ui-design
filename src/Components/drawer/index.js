import React, { useContext } from "react";
import {
  Button,
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  useMediaQuery,
} from "@mui/material";
import { useUIContext } from "../../Context/ui";
import { DrawerCloseButton } from "../../styles/appbar";
import CloseIcon from "@mui/icons-material/Close";
import { Colors } from "../../styles/theme";
import { lighten } from "polished";
import { useTheme } from "@mui/material/styles";
const AppDrawer = () => {
  const theme = useTheme();
  const { drawerOpen, setDrawerOpen } = useUIContext();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      {matches && drawerOpen && (
        <DrawerCloseButton onClick={() => setDrawerOpen(false)}>
          <CloseIcon
            sx={{
              fontSize: "2.5rem",
              color: lighten(0.09, Colors.secondary),
            }}
          />
        </DrawerCloseButton>
      )}

      <Drawer open={matches && drawerOpen}>
        <List>
          <ListItemButton>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Categories</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Products</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>About Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
          <ListItemButton>
            <ListItemText>Contact Us</ListItemText>
          </ListItemButton>
          <Divider variant="middle" />
        </List>
      </Drawer>
    </Box>
  );
};

export default AppDrawer;
