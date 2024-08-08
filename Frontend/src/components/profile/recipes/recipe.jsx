
import { Grid, Paper, Typography } from '@mui/material';

const Recipes = () => {
  return (
    <Grid container spacing={2} sx={{ height: { sm: '65vh', xs: '100vh'}, marginTop: '1rem'}}>
      <Grid item xs={12}>
        <Paper sx={{ height: '20vh', backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Recipes</strong></Typography>
        </Paper>
      </Grid>
      {/* <Grid item xs={12} sm={6}>
        <Paper sx={{ height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
          <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Monthly Spending</strong></Typography>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper sx={{ height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)'}}>
        <Typography sx={{ textAlign: 'center', padding: '1rem'}}><strong>Savings</strong></Typography>
        </Paper>
      </Grid> */}
    </Grid>
  );
};

export default Recipes;