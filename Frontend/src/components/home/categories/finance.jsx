import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = ['Question 1', 'Question 2', 'Question 3', 'Question 4'];

export default function FinanceBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <List>
                    {questions.map((question, index) => (
                        <Button sx={{color:'white'}}key={index} style={{ display: 'block', fontSize: 32}}>
                            {question}
                        </Button>
                    ))}
                </List>
            </Box>
        </Box>
    );
}