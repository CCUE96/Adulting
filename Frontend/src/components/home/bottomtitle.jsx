import { Typography, Box } from '@mui/material';

export default function BottomTitle() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh', // Full viewport height
        }}>
            

            <Typography sx={{
                fontSize: 20,
                color: 'white',
                textAlign: 'center',
            }}>
                <h1 className="nanum-myeongjo-regular">Being an adult can be difficult.</h1>
            </Typography>
        </Box>
    );
}