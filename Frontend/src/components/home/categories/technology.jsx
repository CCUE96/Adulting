import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'How can I protect my personal information online?',
    'What are the best practices for creating strong passwords?',
    'How can I ensure my home Wi-Fi network is secure?',
    'What steps can I take to prevent identity theft online?',
    'How does cloud storage work and is it safe?',
    'What is two-factor authentication and why is it important?',
    'How can I keep my children safe online?',
    'What is the difference between public and private networks?',
    'How can I tell if an email is a phishing attempt?',
    'What is the best way to back up my digital files and photos?'
];

export default function TechBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                    <p style={{textAlign:'center', marginTop: '0px', fontSize: 45, letterSpacing: '0.3px'}}className='dm-serif-display-regular'>TECHNOLOGY</p>
                <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
                    {questions.map((question, index) => (
                         <>
                         <Button sx={{color:'white', textTransform: 'none'}} key={index} style={{ display: 'block', fontSize: 24}}>
                             {question}
                         </Button>
                         <hr/>
                         </>
                    ))}
                </List>
            </Box>
        </Box>
    );
}