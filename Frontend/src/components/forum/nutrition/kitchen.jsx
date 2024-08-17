import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Kitchen() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> How can I cook healthy meals with limited kitchen equipment?</h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                            <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Cooking Healthy Meals with Limited Kitchen Equipment: Simple Solutions for Small Spaces</span>
                                </div>
                                <br />
                                Cooking healthy meals in a kitchen with limited equipment might seem challenging, but with a bit of creativity and resourcefulness, it’s entirely feasible. Whether you’re living in a dorm, renting a small apartment, or simply working with a minimalist kitchen, you can still whip up nutritious, delicious meals. Here’s how to make the most of what you have and still eat well.
                                <br />
                                <br />
                                <strong>1. Embrace Multi-Use Equipment</strong>
                                <br />
                                One-Pot Wonders: Invest in a versatile pot or pan, such as a Dutch oven or a large skillet. These can be used for a variety of cooking methods, including sautéing, simmering, and even baking. One-pot dishes like soups, stews, and stir-fries are ideal for minimizing cleanup and making the most of limited cookware.
                                <br />
                                <br />
                                Multi-Cooker: If you have a multi-cooker or Instant Pot, you’re in luck. These devices can function as a slow cooker, rice cooker, pressure cooker, and more. They’re excellent for making dishes like chili, curry, and risotto with minimal fuss.
                                <br />
                                <br />
                                <strong>2. Master Simple Cooking Techniques</strong>
                                <br />
                                Sautéing: This technique involves cooking food quickly over medium-high heat with a small amount of oil. Use a skillet or frying pan to prepare vegetables, proteins, and grains. Sautéed dishes are quick to make and can be seasoned in countless ways.
                                <br />
                                <br />
                                Roasting: Roasting vegetables or proteins in the oven is a simple way to prepare healthy meals. Line a baking sheet with parchment paper, toss your ingredients with a bit of olive oil and seasoning, and roast until tender. This method works well for sweet potatoes, carrots, chicken, and more.   
                                <br />
                                <br />
                                Boiling and Steaming: A single pot can be used for boiling grains like rice and quinoa, or for steaming vegetables. Steaming is a healthy cooking method that helps retain nutrients in vegetables.
                                <br />
                                <br />
                                <strong>3. Get Creative with Basic Tools</strong>
                                <br />
                                Knife: A good, sharp knife is one of the most important tools in any kitchen. Use it for chopping, slicing, and dicing vegetables and proteins. A knife with a comfortable handle and a sharp blade can make a significant difference in your cooking efficiency.
                                <br />
                                <br />
                                Cutting Board: A cutting board is essential for preparing ingredients. Choose a sturdy, non-slip board to make chopping and slicing safer and easier.
                                <br />
                                <br />
                                Can Opener: For canned goods, a reliable can opener is essential. Canned beans, tomatoes, and vegetables can be convenient and nutritious staples.
                                <br />
                                <br />
                                <strong>4. Use Simple Appliances</strong>
                                <br />
                                Microwave: The microwave is a versatile appliance that can do more than just reheat leftovers. Use it to steam vegetables, cook microwaveable grains, or even make scrambled eggs. Some microwaves have a convection function that can be used for baking small batches.
                                <br />
                                <br />
                                Blender: A blender is useful for making smoothies, soups, and sauces. You can blend fruits and vegetables for quick, nutritious smoothies or pureé cooked vegetables into creamy soups.
                                <br />
                                <br />
                                <strong>5. Plan and Prepare Efficiently</strong>
                                <br />
                                Batch Cooking: Prepare large quantities of food in one go to save time and effort. Cook a big batch of grains, beans, or roasted vegetables, and store them in the fridge for easy meal assembly throughout the week.
                                <br />
                                <br />
                                Pre-Chop Ingredients: When you have time, chop vegetables or marinate proteins in advance. Store them in the fridge or freezer for quick access, making meal prep faster on busy days.
                                <br />
                                <br />
                                Simple Recipes: Opt for recipes with minimal ingredients and steps. Stir-fries, sheet pan meals, and simple soups often require less equipment and are easy to prepare.
                                <br />
                                <br />
                                <strong>6. Focus on Nutrition with Limited Tools</strong>
                                <br />
                                Healthy Staples: Stock up on versatile, nutritious staples like beans, lentils, whole grains, and frozen vegetables. These ingredients are often inexpensive, easy to store, and can be used in a variety of dishes.
                                <br />
                                <br />
                                Protein Sources: Use canned beans, eggs, or tofu as affordable and nutritious protein sources. They require minimal cooking equipment and can be incorporated into many recipes.
                                <br />
                                <br />
                                Fruits and Vegetables: Fresh, frozen, or canned fruits and vegetables are key to a balanced diet. They can be added to salads, soups, or eaten as snacks, providing essential vitamins and minerals.
                                <br />
                                <br />
                                <strong>7. Get Creative with No-Cook Meals</strong>
                                <br />
                                Salads: Create hearty salads with pre-cooked or canned proteins, fresh vegetables, and grains. Add a simple dressing of olive oil, vinegar, and seasoning for flavor.
                                <br />
                                <br />
                                Wraps and Sandwiches: Use whole-grain wraps or bread to make sandwiches filled with lean proteins, veggies, and healthy spreads like hummus or avocado.
                                <br />
                                <br />
                                Overnight Oats: Combine oats with milk or a dairy-free alternative and your choice of toppings like fruit, nuts, or seeds. Refrigerate overnight for a quick, nutritious breakfast.
                                <br />
                                <br />
                                <strong>8. Maintain Kitchen Hygiene</strong>
                                <br />
                                Regular Cleaning: Keep your limited equipment clean and in good condition. Wash utensils and appliances immediately after use to prevent cross-contamination and maintain hygiene.
                                <br />
                                <br />
                                Proper Storage: Store ingredients and leftovers properly to avoid spoilage. Use airtight containers to keep food fresh and prevent waste.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br/>
                                Cooking healthy meals with limited kitchen equipment is entirely achievable with a bit of ingenuity and planning. By using versatile tools, mastering simple techniques, and focusing on nutritious, affordable ingredients, you can enjoy a variety of wholesome dishes without the need for a fully equipped kitchen. Embrace the challenge, and you’ll find that good food doesn’t require an elaborate setup—just creativity and a willingness to make the most of what you have.




                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}