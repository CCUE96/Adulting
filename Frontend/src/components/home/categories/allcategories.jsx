import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const categories1 = ['Technology', 'Health', 'Finance', 'Education'];
const categories2 = ['Home', 'Self-Care', 'Food', 'Other'];

export default function AllCategories() {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh'}}>
            <Box>
                <List>
                    {categories1.map((category, index) => (
                        <ListItem key={index}>
                            <ListItemText 
                                primary={
                                    <Typography sx={{ fontSize: 32 }}>
                                        <span className='dm-serif-display-regular'>{category}</span>
                                    </Typography>
                                } 
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Box>
                <List>
                    {categories2.map((category, index) => (
                        <ListItem key={index}>
                            <ListItemText 
                                primary={
                                    <Typography sx={{ fontSize: 32 }}>
                                       <span className='dm-serif-display-regular'>{category}</span> 
                                    </Typography>
                                } 
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Box>
    );
}