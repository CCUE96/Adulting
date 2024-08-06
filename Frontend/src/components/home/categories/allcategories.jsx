import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material'

const categories1 = ['Technology', 'Health', 'Finance', 'Education'];
const categories2 = ['Home', 'Self-Care', 'Nutrition', 'Other'];

export default function AllCategories({onFinanceClick, onHealthClick, onTechClick, onEducationClick, onHomeClick, onSelfClick, onNutritionClick, onOtherClick}) {
    console.log('all categories rendered');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '50vw', height: '30vh' }}>
            <Box>
                <List>
                    {categories1.map((category, index) => (
                        <>
                            <Button  sx={{ color:'white'}}key={index} onClick={() => {
                                if (category === 'Finance') {
                                    onFinanceClick()
                                } else if (category === 'Health') {
                                    onHealthClick()
                                } else if (category === 'Technology') {
                                    onTechClick()
                                } else if (category === 'Education') {
                                    onEducationClick()
                                }
                            }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: 32 }}>
                                            <span className='dm-serif-display-regular'>{category}</span>
                                        </Typography>
                                    }
                                />
                            </Button>
                            <br />
                        </>
                    ))}
                </List>
            </Box>
            <Box>
                <List>
                    {categories2.map((category, index) => (
                        <>
                            <Button  sx={{ color:'white'}}key={index} onClick={() => {
                                if (category === 'Home') {
                                    onHomeClick()
                                } else if (category === 'Self-Care') {
                                    onSelfClick()
                                } else if (category === 'Nutrition') {
                                    onNutritionClick()
                                } else if (category === 'Other') {
                                    onOtherClick()
                                }
                            }}
                            >
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: 32 }}>
                                            <span className='dm-serif-display-regular'>{category}</span>
                                        </Typography>
                                    }
                                />
                            </Button>
                            <br />
                        </>
                    ))}
                </List>
            </Box>
        </Box>
    );
}