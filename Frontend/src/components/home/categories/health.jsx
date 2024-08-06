import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'What are the recommended daily nutritional guidelines?',
    'How much exercise should I be getting each week?',
    'What are some effective ways to manage stress?',
    'How often should I get a check-up from my doctor?',
    'How can I improve my sleep quality?',
    'What are some healthy weight loss strategies?',
    'What are the benefits of regular physical activity?',
    'How can I maintain good mental health?'
];

export default function HealthBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
            <Button onClick={goBack}>Back</Button>
            <p style={{textAlign:'center', marginTop: '0px', fontSize: 45, letterSpacing: '0.3px'}}className='dm-serif-display-regular'>HEALTH</p>
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
                    {questions.map((question, index) => (
                         <>
                         <Button sx={{color:'white', textTransform: 'none'}} key={index} style={{ display: 'block', fontSize: 24}}>
                             {question}
                         </Button>
                         <hr/>
                         </>
                    ))}
                </List>
            </Box>
        </Box>
    );
}