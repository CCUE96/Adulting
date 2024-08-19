import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Snacks() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> What are some nutritious snacks that are easy to make?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                            <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Nutritious Snacks That Are Easy to Make: Quick and Healthy Ideas</span>
                                </div>
                                <br />
                                In the hustle and bustle of daily life, finding nutritious snacks that are both easy to make and satisfying can be a game-changer for maintaining a balanced diet. Whether you’re at home, at work, or on the go, having a stash of healthy snacks can help keep your energy levels stable and curb unhealthy cravings. Here are some nutritious snack ideas that are quick to prepare and deliciously wholesome.
                                <br />
                                <br />
                                <strong>1. Greek Yogurt Parfait</strong>
                                <br />
                                A Greek yogurt parfait is a versatile and nutrient-dense snack. Simply layer Greek yogurt with fresh fruit, nuts, and a sprinkle of granola. Greek yogurt is rich in protein and probiotics, while fruits add vitamins and antioxidants. Nuts provide healthy fats and crunch. You can customize your parfait with different fruits like berries, bananas, or apples and add a drizzle of honey or a dash of cinnamon for extra flavor.
                                <br />
                                <br />
                                <strong>2. Veggie Sticks with Hummus</strong>
                                <br />
                                Cut up a variety of fresh vegetables such as carrots, celery, bell peppers, and cucumber into sticks. Pair them with hummus for a satisfying snack. Hummus, made from chickpeas, is a great source of protein and fiber, while veggies are packed with vitamins, minerals, and fiber. This combination helps keep you full and supports digestive health.
                                <br />
                                <br />
                                <strong>3. Apple Slices with Nut Butter</strong>
                                <br />
                                For a quick, sweet, and satisfying snack, try apple slices with your favorite nut butter. Apples are high in fiber and antioxidants, while nut butters (like almond, peanut, or cashew) offer healthy fats and protein. This snack is not only delicious but also provides a good balance of carbohydrates, protein, and fat.
                                <br />
                                <br />
                                <strong>4. Cottage Cheese with Fruit or Veggies</strong>
                                <br />
                                Cottage cheese is an excellent source of protein and calcium. It can be enjoyed in various ways—mix it with fresh fruit for a sweet treat or top it with diced vegetables and herbs for a savory option. Adding a sprinkle of chia seeds or a few nuts can enhance its nutritional profile and texture. 
                                <br />
                                <br />
                                <strong>5. Energy Balls</strong>
                                <br />
                                Energy balls are a no-bake snack that’s easy to prepare and customizable. Mix together rolled oats, nut butter, honey, and your choice of add-ins like chia seeds, flax seeds, dried fruit, or dark chocolate chips. Roll the mixture into bite-sized balls and refrigerate. These snacks are packed with fiber, healthy fats, and natural sweetness.
                                <br />
                                <br />
                                <strong>6. Roasted Chickpeas</strong>
                                <br />
                                Roasted chickpeas are a crunchy and satisfying alternative to traditional chips. Toss canned chickpeas with a little olive oil and your favorite spices, then roast them in the oven until crispy. Chickpeas are high in protein and fiber, making them a filling and nutritious snack option.
                                <br />
                                <br />
                                <strong>7. Smoothie</strong>
                                <br />
                                A smoothie is a quick and versatile snack that can be packed with nutrients. Blend together a handful of leafy greens (like spinach or kale), a serving of fruit (such as berries, bananas, or mango), a scoop of protein powder or Greek yogurt, and a splash of almond milk or water. Smoothies are an excellent way to incorporate more fruits and vegetables into your diet.
                                <br />
                                <br />
                                <strong>8. Hard-Boiled Eggs</strong>
                                <br />
                                Hard-boiled eggs are an excellent source of high-quality protein, vitamins, and minerals. They’re easy to prepare in advance and can be seasoned with a pinch of salt and pepper or a sprinkle of paprika. For added variety, you can make egg salad with a touch of Greek yogurt and your favorite herbs.
                                <br />
                                <br />
                                <strong>9. Nut and Seed Mix</strong>
                                <br />
                                A simple and nutritious snack option is a mix of nuts and seeds. Combine almonds, walnuts, sunflower seeds, and pumpkin seeds for a crunchy snack that provides healthy fats, protein, and a range of essential nutrients. Be mindful of portion sizes, as nuts and seeds are calorie-dense.
                                <br />
                                <br />
                                <strong>10. Avocado Toast</strong>
                                <br />
                                For a quick and satisfying snack, try avocado toast. Mash a ripe avocado and spread it over whole-grain toast. Add a sprinkle of salt, pepper, and optional toppings like cherry tomatoes, radishes, or a poached egg. Avocado is rich in healthy fats and fiber, and whole-grain toast provides complex carbohydrates.
                                <br />
                                <br />
                                Incorporating these nutritious snacks into your daily routine can help you stay energized and make healthier choices. Preparing snacks that are both easy and wholesome doesn’t have to be time-consuming—simple ingredients and a little creativity can go a long way in boosting your overall nutrition.
                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}