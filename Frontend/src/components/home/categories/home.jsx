import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'How can I make my home more energy efficient?',
    'What are some basic home repairs I can do myself?',
    'How often should I check my smoke detectors?',
    'What is the process for refinancing a mortgage?',
    'How can I improve home security?',
    'What are tips for decluttering and organizing my home?',
    'How can I create a budget for home improvements?',
    'What are the benefits of owning a home versus renting?',
    'How can I prepare my home for severe weather?',
    'What are some ways to make my home more eco-friendly?'
];

export default function HomeBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 48, letterSpacing: '0.4px'}}className='dm-serif-display-regular'>HOME</p>                <List  sx={{ maxHeight: '200px', overflow: 'auto' , maxWidth:'700px'}}>
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