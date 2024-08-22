import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Link, Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// possibly add usernames?

function Register({ onToggle }) {
    const [registerEmail, setRegisterEmail] = useState('');
    const [registerPassword, setRegisterPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleRegisterSubmit = (e) => {
      e.preventDefault();
      console.log('Register Email:', registerEmail);
      console.log('Register Password:', registerPassword);
      console.log('Confirm Password:', confirmPassword);
    };
  
    return (
      <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="78vh"
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '2rem', padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'solid 2px rgba(52, 50, 47, 0.5)', width: isMobile ? '90vw' : '35vw', marginTop: isMobile ? '4rem' : '0' }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Register
        </Typography>
        <form onSubmit={handleRegisterSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35vw' }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
            sx={{ backgroundColor: 'white', width: isMobile ? '50vw' : '35vw' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
            sx={{ backgroundColor: 'white', width: isMobile ? '50vw' : '35vw' }}
          />
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            sx={{ backgroundColor: 'white', width: isMobile ? '50vw' : '35vw' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '16px', backgroundColor: '#34322f', '&:hover': { backgroundColor: '#4a4845' } }}
          >
            Register
          </Button>
          <Typography sx={{ textAlign: 'center', marginTop: '1rem' }}>
            Already have an account?{' '}
            <Link href="#" onClick={onToggle}>
              Login
            </Link>
          </Typography>
        </form>
      </Box>
      </Container>
    );
  }

  export default Register;