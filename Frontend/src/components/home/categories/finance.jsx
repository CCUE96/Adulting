import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
import { Link } from 'react-router-dom';

const questions = [
    { text: "What are some practical tips for managing student loan debt?", path: 'finance/loans' },
    { text: 'How do I open my first checking or savings account?', path: 'finance/banking' },
    { text: 'What are the basics of filing taxes for the first time?', path: 'finance/taxes' },
    { text: 'How do I build and maintain good credit as a young adult?', path: 'finance/credit' },
    { text: 'What should I know about renting versus buying a home?', path: 'finance/homebuying' },
   

];


export default function FinanceBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 45, letterSpacing: '0.3px'}}className='dm-serif-display-regular'>FINANCE</p>
                <List  sx={{ maxHeight: '200px', overflow: 'auto', minWidth:'700px' }}>
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