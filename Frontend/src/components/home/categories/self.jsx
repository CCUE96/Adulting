import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
    

const questions = [
    { text: 'How can I develop a healthy work-life balance?', path: 'selfcare/worklife' },
    { text: 'What are some self-care practices for managing burnout?', path: 'selfcare/burnout' },
    { text: 'How do I stay motivated and positive furing tough times?', path: 'selfcare/motivation' },
    { text: 'What are some ways to build self-confidence and self-esteem?', path: 'selfcare/confidence' },
    { text: 'How can I find and join social groups or clubs that interest me?', path: 'selfcare/social' },


  

// How do I stay motivated and positive during tough times?
// What are some ways to build self-confidence and self-esteem?
// How can I find and join social groups or clubs that interest me?
    // ... rest of your questions
];
export default function SelfBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 48, letterSpacing: '0.4px'}}className='dm-serif-display-regular'>SELF-CARE</p>

                <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
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