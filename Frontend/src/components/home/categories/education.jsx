import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
    

const questions = [
    { text: "How do I decide between going to college or starting a career right away?", path: 'education/path' },
    { text: 'What are the best ways to stay organized and manage my time in college?', path: 'education/time' },
    { text: 'How can I make the most out of internships and work-study programs?', path: 'education/internship' },
    { text: 'What should I know about student loans and financial aid repayment?', path: 'education/aid' },
    { text: 'How can I effectively prepare for and take standardized tests?', path: 'education/testing' },
   

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

