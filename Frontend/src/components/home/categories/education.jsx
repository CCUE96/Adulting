import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'What are the requirements for getting a GED?',
    'How can I help my child with their homework?',
    'What are some effective study techniques?',
    'How can I go back to school while working full-time?',
    'What financial aid options are available for adult learners?',
    'How can I learn a new language as an adult?',
    'What are the benefits of online learning?',
    'How can I stay motivated while learning something new?',
    'What resources are available for learning new skills online?',
    'How can I balance my studies with other responsibilities?'
];

export default function EducationBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                
                <h1 style={{textAlign:'center', textDecoration: 'underline', textUnderlineOffset: '0.8rem', marginTop: '0px'}}className='dm-serif-display-regular'>EDUCATION</h1>
                
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
                    {questions.map((question, index) => (
                        <Button sx={{color:'white', textTransform: 'none'}} key={index} style={{ display: 'block', fontSize: 24}}>
                            {question}
                        </Button>
                    ))}
                </List>
            </Box>
        </Box>
    );
}