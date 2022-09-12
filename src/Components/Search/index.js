import React from "react";
import { useUIContext } from "../../Context/ui";
import { Slide, Box, IconButton } from "@mui/material";
import { SearchBoxContainer, SearchFeild } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
const SearchBox = () => {
  const { showSearch, setShowSearch } = useUIContext();
  return (
    <Slide direction="down" in={showSearch} timeout={500}>
      <SearchBoxContainer>
        <SearchFeild
          color="secondary"
          variant="standard"
          fullWidth
          placeholder="search..."
        />
        <IconButton>
          <SearchIcon
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
            color="secondary"
          />
        </IconButton>
        <IconButton
          sx={{ position: "absolute", top: 10, right: 10 }}
          onClick={() => setShowSearch(false)}
        >
          <CloseIcon sx={{ fontSize: "2rem" }} color="secondary" />
        </IconButton>
      </SearchBoxContainer>
    </Slide>
  );
};

export default SearchBox;
