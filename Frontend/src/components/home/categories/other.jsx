import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'How can I improve my work-life balance?',
    'What are good books to read for personal development?',
    'How can I learn a new language effectively?',
    'What are some tips for successful gardening?',
    'How can I reduce my carbon footprint?',
    'What are some effective strategies for conflict resolution?',
    'How can I improve my public speaking skills?',
    'What are some tips for traveling on a budget?',
    'How can I motivate myself to exercise regularly?',
    'What are some strategies for effective time management?'
];

export default function OtherBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 48, letterSpacing: '0.4px'}}className='dm-serif-display-regular'>OTHER</p>                
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px'}}>
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