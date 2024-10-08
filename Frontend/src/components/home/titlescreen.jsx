import { Typography, Box } from '@mui/material';

export default function TitleScreen() {
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '90vh', // Full viewport height
        }}>
            <Typography sx={{
                fontSize: 88,
                color: 'white',
                textAlign: 'center',
                marginBottom: '0px',
               
            }}>
                <h1 className="dm-serif-display-regular">ADULTING</h1>
            </Typography>

            <Typography sx={{
                fontSize: 36,
                color: 'white',
                textAlign: 'center',
                marginBottom:'150px'
            }}>
                <h1 className="nanum-myeongjo-regular">Being an adult can be difficult.</h1>
            </Typography>
            <Typography sx={{
                fontSize: 24,
                color: 'white',
                textAlign: 'center',
            }}>
               
            </Typography>
            <Typography sx={{
                fontSize: 18,
                color: 'white',
                textAlign: 'center',
                animation: 'fadeInOut 2s infinite',
                paddingBottom: '50px'
            }}>
               
            <h1 className="nanum-myeongjo-regular">Press Enter to continue...</h1></Typography>

        </Box>
    );
}