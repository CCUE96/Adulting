import React from 'react';
import { Box, Typography } from '@mui/material';

const CustomLegend = ({ data }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem' }}>
      {data.map((entry, index) => (
        <Box key={`legend-item-${index}`} sx={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
          <Box
            sx={{
              width: '12px',
              height: '12px',
              backgroundColor: entry.fill,
              borderRadius: '50%',
              marginRight: '0.5rem',
            }}
          />
          <Typography>{`${entry.name}: ${(entry.percent * 100).toFixed(0)}%`}</Typography>
        </Box>
      ))}
    </Box>
  );
};

export default CustomLegend;