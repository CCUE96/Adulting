import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';
    
const questions = [
    { text: "How do I choose a health insurance plan that's right for me?", path: 'health/plan' },
    { text: 'What are the signs of mental health issues, and where can I get help?', path: 'health/mental' },
    { text: 'How do I find affordable healthcare services?', path: 'health/care' },
    { text: 'What should I include in my first aid kit?', path: 'health/firstaid' },
    { text: 'How can I maintain a healthy diet on a tight budget?', path: 'health/budgetmeals' },
   

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