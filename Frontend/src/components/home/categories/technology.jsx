import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';

const questions = [
    { text: 'What should I know about online privacy and data tracking?', path: 'technology/privacy' },
    { text: 'What are the best practices for creating strong passwords?', path: 'technology/passwords' },
    { text: 'How can I avoid and recognize online scams?', path: 'technology/scams' },
    { text: 'When should I upgrade my phone or other device?', path: 'technology/upgrade' },
    { text: 'How can I troubleshoot common computer problems?', path: 'technology/troubleshoot' },

    // ... rest of your questions
];

export default function TechBox({goBack}) {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white',width: '1136px', height: '322px'}}>
            <Box>
                <Button onClick={goBack}>Back</Button>
                <p style={{textAlign:'center', marginTop: '0px', fontSize: 45, letterSpacing: '0.3px'}}className='dm-serif-display-regular'>TECHNOLOGY</p>
                <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth:'700px' }}>
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