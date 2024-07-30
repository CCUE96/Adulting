import { Typography, Box } from '@mui/material';

export default function TitleScreen() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh', // Full viewport height
        }}>
            <Typography sx={{
                fontSize: 88,
                color: 'white',
                textAlign: 'center',
                marginBottom: '200px',
               
            }}>
                <h1 className="dm-serif-display-regular">ADULTING</h1>
            </Typography>

            <Typography sx={{
                fontSize: 36,
                color: 'white',
                textAlign: 'center',
            }}>
                <h1 className="nanum-myeongjo-regular">Being an adult can be difficult.</h1>
            </Typography>
            <Typography sx={{
                fontSize: 24,
                color: 'white',
                textAlign: 'center',
            }}>
                <h1 className="nanum-myeongjo-regular">Scroll down for more</h1>
            </Typography>
        </Box>
    );
}