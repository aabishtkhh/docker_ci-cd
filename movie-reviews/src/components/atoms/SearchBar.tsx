import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputBase, Paper } from "@mui/material";
import { useState } from "react";

function SearchBar() {
  const [, setInputText] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="search">
        <Paper variant="outlined"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 250 }}
        >
          <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="find Review"
          inputProps={{ 'aria-label': 'find review' }}

            onChange={inputHandler}
          />
          <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {/*braucht daten*/}
    </>
  );
}

export default SearchBar;
