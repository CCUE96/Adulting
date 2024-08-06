import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'

const questions = [
    'How can I create a budget and stick to it?',
    'What are the best ways to save for retirement?',
    'How can I improve my credit score?',
    'What is the difference between a credit and a debit card?',
    'How do I file my taxes?',
    'What is the best way to pay off student loans?',
    'How can I invest in the stock market?',
    'What is an emergency fund and why is it important?',
    'How does insurance work and what types do I need?',
    'Difference between fixed-rate & adjustable-rate mortgage?'
];
export default function FinanceBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <h1 style={{textAlign:'center', textDecoration: 'underline', textUnderlineOffset: '0.8rem', marginTop: '0px'}}className='dm-serif-display-regular'>FINANCE</h1>
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
                    {questions.map((question, index) => (
                        <Button sx={{color:'white', textTransform: 'none'}}key={index} style={{ display: 'block', fontSize: 24}}>
                            {question}
                        </Button>
                    ))}
                </List>
            </Box>
        </Box>
    );
}