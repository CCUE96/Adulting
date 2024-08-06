import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'What are some effective stress management techniques?',
    'How much sleep should an adult get each night?',
    'What are some healthy eating habits?',
    'How often should I exercise and what type of exercise?',
    'What are some ways to maintain a positive mental health?',
    'How can I incorporate mindfulness into my daily routine?',
    'What are some tips for maintaining work-life balance?',
    'How can I manage my time more effectively?',
    'What are some self-care activities that can help me relax?',
    'How can I build a consistent self-care routine?'
];

export default function SelfBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <h1 style={{textAlign:'center', textDecoration: 'underline', textUnderlineOffset: '0.8rem', marginTop: '0px'}}className='dm-serif-display-regular'>SELF-CARE</h1>
                <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
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