import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Mealprep() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> How do I meal prep for the week on a student budget?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                    Meal Prepping on a Student Budget: A Guide to Affordable and Nutritious Weekly Meals</span>
                                </div>
                                <br />
                                Balancing a tight student budget with the need for nutritious, homemade meals can be challenging. Meal prepping is a savvy strategy that not only helps you save money but also ensures you have healthy, convenient meals ready throughout the week. Here’s how to meal prep effectively without breaking the bank.
                                <br />
                                <br />
                                <strong>1. Plan Your Meals</strong>
                                <br />
                                Start with a Plan: Before diving into meal prep, outline a weekly meal plan. Choose simple, budget-friendly recipes that use common ingredients. Focus on meals that are versatile, like stir-fries, soups, and casseroles, which can be varied with different vegetables and proteins.
                                <br />
                                <br />
                                Create a Shopping List: Based on your meal plan, make a detailed shopping list. Stick to the list to avoid impulse buys and ensure you only purchase what you need.
                                <br />
                                <br />
                                <strong>2. Choose Budget-Friendly Ingredients</strong>
                                <br />
                                Staples: Base your meals on inexpensive staples such as rice, beans, lentils, oats, and pasta. These items are versatile, filling, and can be used in a variety of dishes.
                                <br />
                                <br />
                                Seasonal and Local Produce: Buy fruits and vegetables that are in season or on sale. They are often cheaper and fresher. Frozen vegetables and fruits can also be a cost-effective alternative and have a longer shelf life.
                                <br />
                                <br />
                                Protein Options: Opt for budget-friendly proteins like eggs, canned tuna, chicken thighs (often cheaper than breasts), and tofu. Beans and lentils are also great sources of protein and can be used in multiple recipes.
                                <br />
                                <br />
                                <strong>3. Shop Smart</strong>
                                <br />
                                Bulk Buying: Purchase non-perishable items like grains, beans, and spices in bulk. This can reduce the cost per unit and provide you with ingredients for multiple weeks.
                                <br />
                                <br />
                                Generic Brands: Choose store-brand or generic products over name brands. They often have the same quality but at a lower price.
                                <br />
                                <br />
                                <strong>4. Cook in Batches</strong>
                                <br />
                                Batch Cooking: Prepare large quantities of base components such as rice, beans, or pasta at once. Store these in the fridge or freezer to use throughout the week.
                                <br />
                                <br />
                                One-Pot Meals: Make use of one-pot recipes such as chili, stew, or curry. These meals are easy to prepare, require minimal cleanup, and can be stored in portions for the week.
                                <br />
                                <br />
                                Freezer-Friendly Meals: Cook and freeze meals in individual portions. Dishes like casseroles, soups, and stews freeze well and can be easily reheated.
                                <br />
                                <br />
                                <strong>5. Use Proper Storage</strong>
                                <br />
                                Containers: Invest in a set of good-quality, airtight containers. Glass or BPA-free plastic containers are ideal for storing prepped meals. Proper storage helps keep food fresh and reduces the risk of spoilage.
                                <br />
                                <br />
                                Label and Date: Label containers with the contents and date they were prepared. This helps you keep track of what you have and ensures you use up older items first.
                                <br />
                                <br />
                                <strong>6. Keep Meals Diverse</strong>
                                <br />
                                Variety: Avoid getting bored by rotating different recipes and ingredients. Mix up your meals with different vegetables, proteins, and spices to keep things interesting.
                                <br />
                                <br />
                                Spice It Up: Experiment with herbs and spices to add flavor to your meals without adding significant cost. A small investment in a few key spices can greatly enhance the taste of your dishes.
                                <br />
                                <br />
                                <strong>7. Simplify Breakfast and Snacks</strong>
                                <br />
                                Overnight Oats: Prepare overnight oats with your favorite toppings for a quick and nutritious breakfast. They are inexpensive and can be customized with fruits, nuts, and seeds.
                                <br />
                                <br />
                                DIY Snacks: Make simple snacks like trail mix, yogurt with fruit, or veggie sticks with hummus. These can be prepared in bulk and stored for easy access throughout the week.
                                <br />
                                <br />
                                <strong>8. Make Use of Leftovers</strong>
                                <br />
                                Repurpose Leftovers: Get creative with leftovers by incorporating them into new meals. For example, leftover roast chicken can be used in salads, sandwiches, or wraps.
                                <br />
                                <br />
                                Freeze Leftovers: If you have more than you can eat in a week, freeze portions for future use. This reduces waste and provides you with ready-made meals for busy days.
                                <br />
                                <br />
                                <strong>9. Budget-Friendly Recipe Ideas</strong>
                                <br />
                                Stir-Fried Rice: Combine leftover rice with vegetables and a protein source for a quick stir-fry.
                                <br />
                                <br />
                                Lentil Soup: Cook a large batch of lentil soup with vegetables and spices for a hearty, nutritious meal.
                                <br />
                                <br />
                                Chicken and Veggie Bake: Toss chicken pieces with vegetables and your favorite seasoning, then bake for an easy, all-in-one meal.
                                <br />
                                <br />
                                Bean Chili: A simple chili made with beans, tomatoes, and spices is filling and budget-friendly.
                                <br />
                                <br />
                                Vegetable Pasta: Cook pasta and mix with sautéed vegetables and a simple tomato sauce for a satisfying meal.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Meal prepping on a student budget requires a bit of planning and creativity but can be highly rewarding. By focusing on affordable staples, shopping smartly, and preparing meals in bulk, you can enjoy nutritious, homemade food while keeping costs low. With these tips, you’ll be able to streamline your meal prep process and make the most of your budget, all while ensuring you have delicious and healthy meals throughout the week.
                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}