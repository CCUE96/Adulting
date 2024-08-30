import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { Grid, Paper, Typography, IconButton, TextField, Box } from '@mui/material';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import CustomLegend from '../customLegend';

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

  const spendingData = [
    { name: 'Rent', value: 500 },
    { name: 'Groceries', value: 300 },
    { name: 'Utilities', value: 200 },
  ];

  const savingsData = [
    { name: 'Emergency Fund', value: 1000 },
    { name: 'Investments', value: 500 },
    { name: 'Savings Account', value: 300 },
  ];

  const colors = ['#0088FE', '#00C49F', '#FFBB28'];
  
  const getPieChartData = (data) => {
    const total = data.reduce((acc, cur) => acc + cur.value, 0);
    return data.map((entry, index) => ({
      ...entry,
      fill: colors[index % colors.length],
      percent: entry.value / total,
    }));
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
        <Paper sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <Typography sx={{ padding: '1rem'}}><strong>Monthly Spending</strong></Typography>
          <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
          <PieChart width={350} height={350}>
            <Pie
              data={spendingData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {spendingData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </Box>
          <Box sx={{ position: 'absolute', top: '3rem', right: '2rem', padding: '1rem' }}>
          <CustomLegend data={getPieChartData(spendingData)} />
          </Box>
          </Box>
          </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
      <Paper sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', height: { xs: '30vh', sm: '44vh' }, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
          <Typography sx={{ padding: '1rem'}}><strong>Savings</strong></Typography>
          <Box sx={{ display: 'flex', flex: 1, alignItems: 'center' }}>
          <Box sx={{ flex: 1 }}>
          <PieChart width={350} height={350}>
            <Pie
              data={savingsData}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {savingsData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          </Box>
          <Box sx={{ position: 'absolute', top: '3rem', right: '2rem', padding: '1rem'  }}>
              <CustomLegend data={getPieChartData(savingsData)} />
            </Box>
          </Box>
          </Paper>
      </Grid>
    </Grid>
  );
};

export default Finances;