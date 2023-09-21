import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SearchBar from '../atoms/SearchBar';

/* Nav Button -> seperate File */
import NavHomeButton from '../atoms/navButtons/NavHomeButton';
import NavContactButton from '../atoms/navButtons/NavContactButton';
import NavAccountButton from '../atoms/navButtons/NavAccountButton';


export default function NavigationBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={3} sx={{ height: 80, backgroundColor: '#FFFF', padding: 0.5, paddingLeft: 10, paddingRight: 10 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            sx={{ mr: 6, color: '#F2B880' }}
          >
            <LightbulbIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 3, color: '#4E598C', fontFamily: 'Barriecito' }}>
            Lights Out
          </Typography>
          <Box>
            <SearchBar />
          </Box>
            <NavHomeButton />
            <NavContactButton />
            <NavAccountButton />
      </Toolbar>
    </AppBar>
    </ Box>
  );
}

