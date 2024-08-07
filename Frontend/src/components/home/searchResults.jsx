import Box from '@mui/material/Box';
import {Link } from 'react-router-dom'
import List from '@mui/material/List';


import {Button} from '@mui/material'
export default function SearchResults({ searchTerm, goBack }) {
    // ... rest of your component
    
    const questions = [
        { text: 'How can I protect my personal information online?', path: 'personalinfo' },
        { text: 'What are the best practices for creating strong passwords?', path: 'passwords' },
        // ... rest of your questions
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            {/* ... other components */}

            
            <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
            <Button onClick={goBack}>Back</Button>
            {questions.filter(question => question.text.toLowerCase().includes(searchTerm.toLowerCase())).map((question, index) => (
              <Link to={`/forum/${question.path}`} key={index} style={{textDecoration: 'none'}}>
              <Button sx={{color:'white', textTransform: 'none'}} style={{ display: 'block', fontSize: 24}}>
                  {question.text}
              </Button>
          </Link>
         
            ))}
             </List>
            
        </Box>
    );
}