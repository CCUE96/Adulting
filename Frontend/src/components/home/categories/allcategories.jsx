import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';

import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material'
import { useState } from 'react';

const categories1 = ['Technology', 'Health', 'Finance', 'Education'];
const categories2 = ['Home', 'Self-Care', 'Nutrition', 'Other'];






export default function AllCategories({ onFinanceClick, onHealthClick, onTechClick, onEducationClick, onHomeClick, onSelfClick, onNutritionClick, onOtherClick }) {
 
    const [selectedCategory, setSelectedCategory] = useState(null);




    function getTranslateXForCategory(category) {
        if (category === 'Technology') {
            return 'translateX(196px) translateY(18px)';
        } else if (category === 'Health') {
            return 'translateX(237px) translateY(-30px)';
        }else if (category === 'Finance') {
            return 'translateX(233px) translateY(-78px)';
        } else if (category === 'Education') {
            return 'translateX(212px) translateY(-127px)';
        } else if (category === 'Home') {
            return 'translateX(-156px) translateY(18px)';
        } else if (category === 'Self-Care') {
            return 'translateX(-193px) translateY(-27px)';
        } else if (category === 'Nutrition') {
            return 'translateX(-195px) translateY(-72px)';
        }else  {
            return 'translateX(-164px) translateY(-118px)';
        }


    }


    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around', padding: 2, backgroundColor: 'rgba(255, 255, 255, 0.0)', backdropFilter: 'blur(10px)', color: 'white', width: '1136px', height: '322px' }}>
            <Box>
                <List>
                    {categories1.map((category, index) => (
                        <div key={index} style={{
                            opacity: selectedCategory && selectedCategory !== category ? 0 : 1,
                            transform: selectedCategory === category ? `scale(1.4) ${getTranslateXForCategory(category)}` : 'none',
                            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                        }}>
                            <Button sx={{ color: 'white' }} onClick={() => {
                                setSelectedCategory(category);
                                if (category === 'Finance') {
                                    onFinanceClick()
                                } else if (category === 'Health') {
                                    onHealthClick()
                                } else if (category === 'Technology') {
                                    onTechClick()
                                } else if (category === 'Education') {
                                    onEducationClick()
                                }
                            }}>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: 32 }}>
                                            <span className='dm-serif-display-regular'>{category}</span>
                                        </Typography>
                                    }
                                />
                            </Button>
                        </div>
                    ))}
                </List>
            </Box>
            <Box>
                <List>
                    {categories2.map((category, index) => (
                        <div key={index} style={{
                            opacity: selectedCategory && selectedCategory !== category ? 0 : 1,
                            transform: selectedCategory === category ? `scale(1.5) ${getTranslateXForCategory(category)}`  : 'none',
                            transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
                        }}>
                            <Button sx={{ color: 'white' }} onClick={() => {
                                setSelectedCategory(category);
                                if (category === 'Home') {
                                    onHomeClick()
                                } else if (category === 'Self-Care') {
                                    onSelfClick()
                                } else if (category === 'Nutrition') {
                                    onNutritionClick()
                                } else if (category === 'Other') {
                                    onOtherClick()
                                }
                            }}>
                                <ListItemText
                                    primary={
                                        <Typography sx={{ fontSize: 32 }}>
                                            <span className='dm-serif-display-regular'>{category}</span>
                                        </Typography>
                                    }
                                />
                            </Button>
                        </div>
                    ))}
                </List>
            </Box>
        </Box>
    );
}

