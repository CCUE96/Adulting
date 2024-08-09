import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'
import List from '@mui/material/List';


import { Button } from '@mui/material'
export default function SearchResults({ searchTerm, goBack }) {
    // ... rest of your component

    const questions = [
        { text: 'What should I know about online privacy and data tracking?', path: 'technology/privacy' },
        { text: 'What are the best practices for creating strong passwords?', path: 'technology/passwords' },
        { text: 'How can I avoid and recognize online scams?', path: 'technology/scams' },
        { text: 'When should I upgrade my phone or other device?', path: 'technology/upgrade' },
        { text: 'How can I troubleshoot common computer problems?', path: 'technology/troubleshoot' },

        { text: 'How can I develop a healthy work-life balance?', path: 'selfcare/worklife' },
        { text: 'What are some self-care practices for managing burnout?', path: 'selfcare/burnout' },
        { text: 'How do I stay motivated and positive furing tough times?', path: 'selfcare/motivation' },
        { text: 'What are some ways to build self-confidence and self-esteem?', path: 'selfcare/confidence' },
        { text: 'How can I find and join social groups or clubs that interest me?', path: 'selfcare/social' },

        { text: 'How do I navigate the transition from high school to college or work life?', path: 'other/transition' },
        { text: 'What are some effective strategies for networking and job hunting?', path: 'other/networking' },
        { text: 'How do I handle conflict resolution in personal and professional relationships?', path: 'other/conflict' },
        { text: 'What are the basics of renting a car or using public transportation?', path: 'other/transportation' },
        { text: 'How can I stay informed about current events and why is it important?', path: 'other/events' },

        { text: 'How do I meal prep for the week on a student budget?', path: 'nutrition/mealprep' },
        { text: 'What are some nutritious snacks that are easy to make?', path: 'nutrition/snacks' },
        { text: 'How can I identify and avoid unhealthy eating habits?', path: 'nutrition/habits' },
        { text: 'What should I know about different dietary restrictions and preferences?', path: 'nutrition/diet' },
        { text: 'How can I cook healthy meals with limited kitchen equipment?', path: 'nutrition/kitchen' },
        // ... rest of your questions
    ];

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '1136px', height: '322px' }}>
            {/* ... other components */}


            <List sx={{ maxHeight: '200px', overflow: 'auto', maxWidth: '700px' }}>
                <Button onClick={goBack}>Back</Button>
                {questions.filter(question => question.text.toLowerCase().includes(searchTerm.toLowerCase())).map((question, index) => (
                    <Link to={`/forum/${question.path}`} key={index} style={{ textDecoration: 'none' }}>
                        <Button sx={{ color: 'white', textTransform: 'none' }} style={{ display: 'block', fontSize: 24 }}>
                            {question.text}
                        </Button>
                    </Link>

                ))}
            </List>

        </Box>
    );
}