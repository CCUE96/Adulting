import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Grid, Paper, Typography, IconButton, TextField } from '@mui/material';

const Finances = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [income, setIncome] = useState('$70,000');

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleIncomeChange = (event) => {
    const value = event.target.value.replace(/[^0-9]/g, '');
    setIncome(`$${value}`); // add limiter so user cannot do more then 1 billion for income
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      setIncome(formatNumberWithCommas(income));
      setIsEditing(false);
    }
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Grid container spacing={2} sx={{ height: { sm: '65vh', xs: '100vh'}, marginTop: '1rem'}}>
      <Grid item xs={12} sm={12}>
        <Paper sx={{ height: { xs: '20vh', sm: '20vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
        <IconButton  onClick= {handleEditClick} sx={{ position: 'absolute', top: '7rem', right: '0.5rem' }}>
            <EditIcon />
          </IconButton>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Income</strong></Typography>
          {isEditing ? (
            <TextField
              value={income}
              onChange={handleIncomeChange}
              onKeyPress={handleKeyPress}
              sx={{ position: 'absolute', top: '10rem', left: '50%', transform: 'translateX(-50%)', width: '30%', textAlign: 'center' }}
            />
          ) : (
            <Typography sx={{ textAlign: 'center', padding: '1rem', fontSize: '3.5rem' }}>{income}</Typography>
          )}
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Monthly Spending</strong></Typography>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
        <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Savings</strong></Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Finances;