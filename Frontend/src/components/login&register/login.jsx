import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box, Link, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// possibly add username
function Login({ onToggle }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Email:', email);
      console.log('Password:', password);
    };

  return (
    <Container maxWidth="sm" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height={isMobile ? 'auto' : '78vh'}
        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '2rem', padding: '1rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', border: 'solid 2px rgba(52, 50, 47, 0.5)', width: isMobile ? '90vw' : '35vw', }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '35vw' }}>
          <TextField
            label="Email"
            variant="outlined"
            margin="normal"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ backgroundColor: 'white', width: isMobile ? '50vw' : '35vw' }}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ backgroundColor: 'white', width: isMobile ? '50vw' : '35vw' }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: '16px', backgroundColor: '#34322f', 
                '&:hover': {
                backgroundColor: '#4a4845'
            }}}
          >
            Login
          </Button>
          <Typography sx={{ textAlign: 'center', marginTop: '1rem' }}>Don't have an account?{' '}
          <Link href="#" onClick={onToggle}>
            Sign Up
          </Link></Typography>
        </form>
      </Box>
    </Container>
  );
}

export default Login;