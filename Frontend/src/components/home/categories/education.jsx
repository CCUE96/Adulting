import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
    
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
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 45, letterSpacing: '0.3px'}}className='dm-serif-display-regular'>EDUCATION</p>                
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
                {questions.map((question, index) => (
                        <>
                        <Link to={`/forum/${question.path}`} key={index} style={{textDecoration: 'none'}}>
                            <Button sx={{color:'white', textTransform: 'none'}} style={{ display: 'block', fontSize: 24}}>
                                {question.text}
                            </Button>
                        </Link>
                        <hr/>
                        </>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

