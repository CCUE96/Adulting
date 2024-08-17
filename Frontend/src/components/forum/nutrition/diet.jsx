import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Diet() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> What should I know about different dietary restrictions and preferences?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        Understanding Different Dietary Restrictions and Preferences: A Comprehensive Guide</span>
                                </div>
                                <br />
                                Navigating the world of dietary restrictions and preferences can be complex, especially when preparing meals for others or trying to meet your own dietary needs. Whether for health reasons, ethical beliefs, or personal preferences, understanding various dietary requirements is crucial for promoting inclusivity and making informed food choices. Here’s a comprehensive guide to the most common dietary restrictions and preferences, and what you need to know about each.
                                <br />
                                <br />

                                <strong>1. Food Allergies</strong>
                                <br />
                                Common Allergies: Food allergies are immune system reactions to specific proteins in foods.
                                Common allergens include peanuts, tree nuts, shellfish, fish, milk, eggs, soy, and wheat.
                                <br />
                                <br />
                                Management: Individuals with food allergies must avoid consuming the offending allergens entirely. It’s essential to read food labels carefully, ask about ingredient lists when dining out, and be aware of cross-contamination risks.
                                <br />
                                <br />
                                Symptoms: Allergic reactions can range from mild (hives, itching) to severe (anaphylaxis, a life-threatening condition). Immediate medical attention is required for severe reactions.
                                <br />
                                <br />
                                <strong>2. Gluten-Free Diet</strong>
                                <br />
                                Gluten Sensitivity: Some people have celiac disease, an autoimmune disorder where gluten (a protein found in wheat, barley, and rye) damages the small intestine. Others may have non-celiac gluten sensitivity, experiencing discomfort without immune system involvement.
                                <br />
                                <br />
                                Management: Avoid all sources of gluten, including wheat, barley, rye, and products made from these grains. Gluten-free alternatives such as rice, quinoa, and gluten-free oats are safe options.
                                <br />
                                <br />
                                Cross-Contamination: Gluten-free individuals must be cautious about cross-contamination in kitchens and restaurants. Dedicated cooking surfaces and utensils can help prevent accidental exposure.
                                <br />
                                <br />
                                <strong>3. Vegetarianism</strong>
                                <br />
                                Types of Vegetarians:
                                <br />
                                <br />
                                Lacto-Ovo Vegetarian: Avoids meat and fish but includes dairy products and eggs.
                                <br />
                                <br />
                                Lacto-Vegetarian: Avoids meat, fish, and eggs but includes dairy products.
                                <br />
                                <br />
                                Ovo-Vegetarian: Avoids meat, fish, and dairy but includes eggs.
                                <br />
                                <br />
                                Vegan: Avoids all animal products, including meat, fish, dairy, eggs, and often honey.
                                <br />
                                <br />
                                Nutrition: Vegetarians should ensure they get adequate protein, iron, vitamin B12, calcium, and omega-3 fatty acids from plant-based sources or supplements.
                                <br />
                                <br />
                                Ethics and Environment: Many choose vegetarianism for ethical reasons related to animal welfare or environmental concerns.
                                <br />
                                <br />
                                <strong>4. Veganism</strong>
                                <br />
                                Definition: Vegans avoid all animal products and by-products, including meat, dairy, eggs, honey, and often non-food items like leather.
                                <br />
                                <br />
                                Nutritional Needs: Vegans need to pay attention to getting essential nutrients such as vitamin B12, vitamin D, iron, calcium, and omega-3 fatty acids. Plant-based sources or fortified foods and supplements can help meet these needs.
                                <br />
                                <br />
                                Ethical and Environmental Reasons: Veganism is often motivated by concerns about animal rights and reducing environmental impact.
                                <br />
                                <br />
                                <strong>5. Low-Carb and Ketogenic Diets</strong>
                                <br />
                                Low-Carb Diet: Reduces carbohydrate intake, focusing on proteins and fats. It can help manage weight and blood sugar levels.
                                <br />
                                <br />
                                Ketogenic Diet: A very low-carb, high-fat diet that aims to induce ketosis, a state where the body burns fat for energy instead of carbohydrates.
                                <br />
                                <br />
                                Management: Individuals on these diets must monitor carbohydrate intake carefully and often need to adjust their fat and protein sources to meet their energy needs.
                                <br />
                                <br />
                                Health Considerations: These diets can be effective for some but may require careful planning to ensure balanced nutrition.
                                <br />
                                <br />
                                <strong>6. Paleo Diet</strong>
                                <br />
                                Definition: Focuses on eating foods presumed to be available to our pre-agricultural ancestors. This includes meat, fish, fruits, vegetables, nuts, and seeds while avoiding grains, legumes, dairy, refined sugar, and processed foods.
                                <br />
                                <br />
                                Nutritional Focus: Emphasizes whole foods and excludes processed items. It can be beneficial for some in reducing inflammation and improving metabolic health.
                                <br />
                                <br />
                                Criticisms: The diet can be restrictive and may exclude nutritious food groups like whole grains and legumes.
                                <br />
                                <br />
                                <strong>7. Dairy-Free and Lactose-Free Diets</strong>
                                <br />
                                Lactose Intolerance: Affects the ability to digest lactose, a sugar found in milk and dairy products, leading to digestive discomfort.
                                <br />
                                <br />
                                Dairy Allergy: An immune reaction to proteins in milk, requiring avoidance of all dairy products.
                                <br />
                                <br />
                                Alternatives: Lactose-intolerant individuals can opt for lactose-free dairy products or non-dairy alternatives like almond, soy, or oat milk. Those with a dairy allergy should avoid all dairy-containing products.
                                <br />
                                <br />
                                <strong>8. Mediterranean Diet</strong>
                                <br />
                                Definition: Inspired by the traditional eating patterns of countries bordering the Mediterranean Sea. Emphasizes whole grains, fruits, vegetables, nuts, seeds, fish, and olive oil, with moderate wine consumption.
                                <br />
                                <br />
                                Health Benefits: Associated with reduced risk of heart disease, improved cognitive function, and better overall health due to its emphasis on healthy fats, lean proteins, and whole foods.
                                <br />
                                <br />
                                Flexibility: This diet is generally flexible and includes a variety of nutritious, minimally processed foods.
                                <br />
                                <br />
                                <strong>9. Intermittent Fasting</strong>
                                <br />
                                Definition: Involves alternating periods of eating and fasting. Common patterns include the 16/8 method (fasting for 16 hours and eating during an 8-hour window) or the 5:2 method (eating normally for five days and restricting calories for two days).
                                <br />
                                <br />
                                Benefits: Can aid in weight management, improve metabolic health, and simplify eating patterns. However, it may not be suitable for everyone, including those with certain medical conditions.
                                <br />
                                <br />
                                Approach: It’s essential to focus on balanced, nutritious foods during eating periods to ensure overall health.
                                <br />
                                <br />
                                <strong>10. Food Sensitivities and Intolerances</strong>
                                <br />
                                Definition: Unlike allergies, food sensitivities and intolerances involve digestive discomfort rather than immune system responses. Common culprits include lactose, fructose, and certain artificial additives.
                                <br />
                                <br />
                                Management: Identifying and avoiding specific trigger foods can help manage symptoms. Keeping a food diary and consulting with a healthcare provider can aid in diagnosis and management.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Understanding and respecting various dietary restrictions and preferences is crucial for fostering inclusivity and making informed food choices. Whether accommodating allergies, following ethical guidelines, or adhering to personal health goals, recognizing the diverse needs of individuals helps promote better nutrition and overall well-being. By being mindful of these dietary requirements, you can ensure that everyone has access to delicious, nutritious, and appropriate food options.
                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}