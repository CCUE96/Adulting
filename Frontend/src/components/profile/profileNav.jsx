
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const ProfileNav = () => {
  return (
      <AppBar position="static" sx={{ padding: 1, backgroundColor: '#34322f'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ display: 'flex', gap: 7 }}>
          <Button color="inherit">My Finances</Button>
          <Button color="inherit">My Health</Button>
          <Button color="inherit">My Recipes</Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

export default ProfileNav;