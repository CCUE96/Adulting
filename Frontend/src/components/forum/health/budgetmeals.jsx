import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function BudgetMeals() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>
                        How can I maintain a healthy diet on a tight budget?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        How to Maintain a Healthy Diet on a Tight Budget</span>
                                </div>
                                <br />
                                Eating healthy is crucial for maintaining overall well-being, but many people assume it requires a hefty budget. The good news is that maintaining a nutritious diet can be both affordable and satisfying, even if you’re watching your spending. Here’s how you can eat healthily without breaking the bank.
                                <br />
                                <br />

                                <strong>1. Plan Your Meals</strong>
                                <br />
                                a. Create a Weekly Meal Plan: Planning your meals for the week helps you avoid impulse purchases and reduces food waste. Start by selecting simple, balanced meals that incorporate a variety of food groups.
                                <br />
                                <br />
                                b. Make a Shopping List: Based on your meal plan, create a shopping list of the ingredients you need. Sticking to a list helps prevent buying unnecessary items and helps you stay within your budget.
                                <br />
                                <br />
                                c. Use Leftovers Wisely: Plan meals that can be used as leftovers. This not only saves time but also reduces food waste. For example, a roast chicken can be used for sandwiches, salads, and soups throughout the week.
                                <br />
                                <br />
                                <strong>2. Shop Smart</strong>
                                <br />
                                a. Buy in Bulk: Purchase non-perishable items like grains, beans, and pasta in bulk. These items are often cheaper per unit and have a long shelf life, making them a cost-effective choice.
                                <br />
                                <br />
                                b. Shop Seasonal and Local: Fruits and vegetables that are in season or grown locally are usually less expensive and fresher. Visit farmers’ markets or local produce stands for good deals.
                                <br />
                                <br />
                                c. Compare Prices: Check unit prices to find the best deals. Sometimes, larger packages are more economical, but not always. Compare prices per ounce or per pound to make the best choice.
                                <br />
                                <br />
                                d. Use Coupons and Discounts: Take advantage of coupons, sales, and store promotions. Many stores offer loyalty programs or digital coupons that can help you save on groceries.
                                <br />
                                <br />
                                <strong>3. Focus on Affordable, Nutrient-Dense Foods</strong>
                                <br />
                                a. Incorporate Beans and Lentils: Beans, lentils, and other legumes are excellent sources of protein, fiber, and essential nutrients. They are also relatively inexpensive and versatile.
                                <br />
                                <br />
                                b. Choose Whole Grains: Brown rice, quinoa, oats, and whole-wheat pasta are affordable whole grains that provide more nutrients than refined grains. They are filling and can be used in a variety of recipes.
                                <br />
                                <br />
                                c. Buy Frozen Vegetables and Fruits: Frozen produce is often less expensive than fresh and can be just as nutritious. It also has a longer shelf life, reducing the likelihood of spoilage.
                                <br />
                                <br />
                                d. Opt for Canned Goods: Canned vegetables, beans, and tomatoes are budget-friendly and convenient. Choose low-sodium or no-added-sugar options when possible.
                                <br />
                                <br />
                                e. Use Eggs and Dairy Wisely: Eggs are an affordable source of high-quality protein and can be used in various dishes. Also, dairy products like Greek yogurt and cheese provide essential nutrients and can be used in meals and snacks.
                                <br />
                                <br />
                                <strong>4. Cook at Home</strong>
                                <br />
                                a. Prepare Meals from Scratch: Cooking at home is generally less expensive than dining out or buying pre-packaged meals. Simple recipes using basic ingredients can be both nutritious and budget-friendly.
                                <br />
                                <br />
                                b. Use Cost-Effective Cooking Methods: Techniques like baking, steaming, and slow cooking can be both energy-efficient and economical. They also help retain the nutritional value of your food.
                                <br />
                                <br />
                                c. Make Homemade Snacks: Prepare your own snacks, like popcorn, trail mix, or vegetable sticks with hummus. Homemade snacks are often healthier and cheaper than store-bought alternatives.
                                <br />
                                <br />
                                <strong>5. Reduce Food Waste</strong>
                                <br />
                                a. Store Food Properly: Proper storage extends the shelf life of your food. Use airtight containers for dry goods and keep perishable items in the fridge or freezer to prevent spoilage.
                                <br />
                                <br />
                                b. Repurpose Leftovers: Get creative with leftovers by turning them into new dishes. For example, leftover roasted vegetables can be added to soups or stir-fries.
                                <br />
                                <br />
                                c. Practice FIFO (First In, First Out): Use older items in your pantry or fridge before newer ones. This helps prevent food from going bad and reduces waste.
                                <br />
                                <br />
                                <strong>6. Seek Out Budget-Friendly Recipes</strong>
                                <br />
                                a. Find Simple Recipes: Look for recipes that use inexpensive ingredients and require minimal preparation. Websites, apps, and cookbooks focused on budget cooking can provide inspiration.
                                <br />
                                <br />
                                b. Experiment with Meatless Meals: Incorporate meatless meals into your diet. Vegetarian dishes often cost less and can be just as satisfying and nutritious as meat-based ones.
                                <br />
                                <br />
                                c. Utilize Online Resources: Many online resources and communities share budget-friendly meal plans and recipes. Use these resources to find ideas and tips for eating well on a budget.
                                <br />
                                <br />
                                <strong>7. Stay Hydrated</strong>
                                <br />
                                a. Drink Water: Water is the most cost-effective and healthy beverage choice. Staying hydrated is essential for overall health and can help you feel full, reducing the temptation to snack unnecessarily.
                                <br />
                                <br />
                                b. Avoid Sugary Drinks: Limit or avoid sugary drinks and sodas, which can be expensive and unhealthy. Opt for water, herbal teas, or homemade flavored water with fresh fruit.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Maintaining a healthy diet on a tight budget is entirely achievable with some planning and smart shopping strategies. By focusing on nutrient-dense foods, cooking at home, and minimizing waste, you can enjoy a balanced and satisfying diet without overspending. Embrace these tips to take control of your nutrition and your budget, and remember that small, consistent changes can lead to significant savings and improved health.
                            </p>


                        </Typography>

                    </Paper>
                </Box>
            </Box>
        </>
    );
}