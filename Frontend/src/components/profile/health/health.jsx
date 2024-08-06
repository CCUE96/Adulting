
import { Grid, Paper, Typography } from '@mui/material';

const Health = () => {
  return (
    <Grid container spacing={2} sx={{ height: '65vh', marginTop: '1rem'}}>
      <Grid item xs={12}>
        <Paper sx={{ height: '20vh'}}>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Health</strong></Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ height: '44vh'}}>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Monthly Spending</strong></Typography>
          </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper sx={{ height: '44vh'}}>
        <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Savings</strong></Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Health;