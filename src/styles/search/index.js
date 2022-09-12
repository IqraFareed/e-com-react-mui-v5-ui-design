import { styled } from "@mui/material/styles";
import { Box, TextField } from "@mui/material";
import { Colors } from "../theme";
export const SearchBoxContainer = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: Colors.primary,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 999999,
  opacity: 0.9,
}));

export const SearchFeild = styled(TextField)(({ theme }) => ({
  ".MuiInputLabel-root": {
    color: Colors.secondary,
  },
  ".MuiInput-root:": {
    fontSize: "1em",
    [theme.breakpoints.up("md")]: {
      fontSize: "2em",
    },
    color: Colors.secondary,
  },
  ".MuiInput-root::before": {
    borderBottom: `1px solid ${Colors.secondary}`,
  },
  padding: "0 0 0 40px",
}));
