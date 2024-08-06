import PropTypes from 'prop-types';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

const ProfileNav = ({ onNavClick }) => {
  return (
      <AppBar position="static" sx={{ padding: 1, backgroundColor: '#34322f'}}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box sx={{ display: 'flex', gap: 7 }}>
          <Button color="inherit" onClick={() => onNavClick('finances')}>My Finances</Button>
          <Button color="inherit" onClick={() => onNavClick('health')}>My Health</Button>
          <Button color="inherit" onClick={() => onNavClick('recipes')}>My Recipes</Button>
          </Box>
        </Toolbar>
      </AppBar>
  );
};

ProfileNav.propTypes = {
  onNavClick: PropTypes.func.isRequired,
};

export default ProfileNav;