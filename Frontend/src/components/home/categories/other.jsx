import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import {Link} from 'react-router-dom'
    
const questions = [
    { text: 'How do i navigate the transition from high school to college or work life?', path: 'other/transition' },
    { text: 'What are some effective strategies for networking and job hunting?', path: 'other/networking' },
    { text: 'How do I handle conflict resolution in personal and professional relationships?', path: 'other/conflict' },
    { text: 'What are the basics of renting a car or using public transportation?', path: 'other/transportation' },
    { text: 'How can I stay informed about current events and why is it important?', path: 'other/events' },

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