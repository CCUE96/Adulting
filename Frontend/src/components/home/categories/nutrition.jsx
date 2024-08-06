import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import {Button} from '@mui/material'
    
const questions = [
    'What are the recommended daily nutritional guidelines?',
    'How can I make healthier food choices?',
    'What are some healthy alternatives to sugar?',
    'How can I ensure I am getting enough vitamins?',
    'What are the benefits of drinking water regularly?',
    'How can I manage my weight through diet?',
    'What are the health benefits of eating fruits and vegetables?',
    'What is the difference between good fats and bad fats?',
    'How does alcohol consumption affect my health?',
    'What are strategies for healthy meal planning and prep?'
];

export default function NutritionBox({goBack}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 48, letterSpacing: '0.4px'}}className='dm-serif-display-regular'>NUTRITION</p>                
                <List  sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
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