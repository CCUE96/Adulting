import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const questions = [
    { text: 'How do I handle basic repairs and maintenance in my apartment?', path: 'home/repairs' },
    { text: 'What should I consider when creating my first apartment budget?', path: 'home/budget' },
    { text: 'What are the basic cooking skills every young adult should know?', path: 'home/cooking' },
    { text: 'What should I know about renters insurance and why is it important?', path: 'home/insurance' },
    { text: 'How do I deal with noisy neighbors or difficult roomates?', path: 'home/people' },
   

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