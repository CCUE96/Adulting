import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Cooking() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> What are the basic cooking skills every young adult should know?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        Essential Cooking Skills Every Young Adult Should Master</span>
                                </div>
                                <br />
                                As a young adult venturing into the world of independence, mastering basic cooking skills can significantly enhance your quality of life. Not only does cooking at home save money and promote healthier eating habits, but it also provides a sense of accomplishment and creativity. Whether you’re moving into your first apartment or simply looking to upgrade your kitchen skills, here’s a guide to the fundamental cooking techniques every young adult should know.
                                <br />
                                <br />

                                <strong>1. Knife Skills</strong>
                                <br />
                                a. How to Hold a Knife: Proper knife handling is crucial for safety and efficiency. Hold the knife with your thumb and index finger gripping the blade, while the other fingers wrap around the handle. This grip provides better control.
                                <br />
                                <br />
                                b. Basic Cuts: Learn essential knife cuts, including chopping, dicing, mincing, and slicing. Practice cutting vegetables into uniform sizes to ensure even cooking. Understanding how to properly dice an onion, slice a bell pepper, or mince garlic can streamline your cooking process.
                                <br />
                                <br />
                                c. Knife Safety: Always cut on a stable surface and keep your fingers tucked in to avoid accidental cuts. Regularly sharpen your knives to maintain their effectiveness.
                                <br />
                                <br />
                                <strong>2. Basic Cooking Techniques</strong>
                                <br />
                                a. Sautéing: This technique involves cooking food quickly over medium-high heat with a small amount of oil or butter. It’s great for vegetables, meats, and aromatics like onions and garlic. Stir frequently to ensure even cooking and prevent burning.
                                <br />
                                <br />
                                b. Boiling and Simmering: Boiling involves cooking food in rapidly boiling water, while simmering uses a lower temperature where bubbles occasionally break the surface. Mastering these techniques is essential for making pasta, rice, and soups.
                                <br />
                                <br />
                                c. Roasting: Roasting uses dry heat in an oven to cook food, often resulting in a caramelized exterior and tender interior. Learn to roast vegetables, meats, and even fruits for a range of delicious dishes.
                                <br />
                                <br />
                                d. Baking: Understand the basics of baking, including measuring ingredients accurately and following recipes closely. Start with simple recipes like cookies, muffins, or quick breads to build confidence.
                                <br />
                                <br />
                                e. Grilling: Whether using a gas or charcoal grill, mastering grilling techniques can enhance your culinary repertoire. Practice grilling meats, vegetables, and even fruits to achieve that smoky, charred flavor.
                                <br />
                                <br />
                                <strong>3. Understanding Seasoning and Flavoring</strong>
                                <br />
                                a. Salt and Pepper: Salt enhances the natural flavors of ingredients, while pepper adds a hint of spice. Learn to use them in moderation and taste as you go to achieve the right balance.
                                <br />
                                <br />
                                b. Herbs and Spices: Familiarize yourself with common herbs (such as basil, thyme, and cilantro) and spices (like cumin, paprika, and cinnamon). Understand when and how to use them to add depth and complexity to your dishes.
                                <br />
                                <br />
                                c. Acid and Sweetness: Ingredients like lemon juice, vinegar, and sugar can balance flavors in a dish. Experiment with these elements to achieve the right taste profile in your cooking.
                                <br />
                                <br />
                                <strong>4. Cooking Staples</strong>
                                <br />
                                a. Rice and Pasta: Master the art of cooking rice and pasta. Use the appropriate water-to-rice ratio and follow package instructions for pasta cooking times. Both are versatile staples that can be used in a variety of dishes.
                                <br />
                                <br />
                                b. Eggs: Eggs are incredibly versatile and can be cooked in numerous ways. Practice making scrambled eggs, fried eggs, and boiled eggs. Learning to make an omelet or frittata can also be a valuable skill.
                                <br />
                                <br />
                                c. Simple Sauces: Knowing how to make a basic tomato sauce, white sauce (béchamel), or vinaigrette can elevate your meals. These sauces can be used in various dishes and are relatively easy to prepare.
                                <br />
                                <br />
                                <strong>5. Kitchen Organization and Clean-Up</strong>
                                <br />
                                a. Mise en Place: This French term means "everything in its place." Before you start cooking, gather and prepare all your ingredients. This practice helps streamline the cooking process and reduces the chance of forgetting ingredients.
                                <br />
                                <br />
                                b. Proper Storage: Learn how to store ingredients properly to maintain their freshness and prevent spoilage. Understand the difference between refrigerating, freezing, and storing items in the pantry.
                                <br />
                                <br />
                                c. Cleaning As You Go: Keeping your workspace clean while cooking helps avoid clutter and makes clean-up easier. Wash utensils, cutting boards, and dishes as you use them to maintain an organized kitchen.
                                <br />
                                <br />
                                d. Food Safety: Understand basic food safety practices, such as cooking meats to the correct internal temperature, preventing cross-contamination, and keeping perishable foods at the proper temperature.
                                <br />
                                <br />
                                <strong>6. Following Recipes and Adapting Dishes</strong>
                                <br />
                                a. Reading Recipes: Learn how to read and follow recipes accurately. Pay attention to ingredient lists, cooking times, and instructions to ensure your dish turns out as expected.
                                <br />
                                <br />
                                b. Adapting Recipes: As you gain confidence, experiment with adapting recipes based on your preferences or available ingredients. Substitute ingredients, adjust seasonings, or modify cooking methods to make a recipe your own.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Mastering these basic cooking skills will not only make your daily meals more enjoyable but also empower you to experiment and create dishes with confidence. From knife skills and cooking techniques to seasoning and kitchen organization, these fundamentals will lay the groundwork for a lifetime of successful cooking. Embrace the learning process, practice regularly, and soon you’ll find that cooking becomes an enjoyable and rewarding part of your routine.
                            </p>


                        </Typography>

                    </Paper>
                </Box>
            </Box>
        </>
    );
}