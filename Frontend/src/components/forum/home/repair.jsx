import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Repair() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> How do I handle basic repairs and maintenance in my apartment?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        How to Handle Basic Repairs and Maintenance in Your Apartment</span>
                                </div>
                                <br />
                                Living in an apartment offers many benefits: convenience, amenities, and a sense of community. However, it also comes with its own set of challenges, particularly when it comes to handling basic repairs and maintenance. Whether you're a seasoned renter or new to apartment living, knowing how to tackle these tasks can save you time, money, and stress. Here’s a guide to help you handle basic repairs and maintenance in your apartment effectively.
                                <br />
                                <br />

                                <strong>1. Know Your Responsibilities</strong>
                                <br />
                                Before diving into repairs, it's crucial to understand what’s typically covered by you versus your landlord or property management company. Generally, tenants are responsible for minor repairs and maintenance, such as changing light bulbs or unclogging sinks. Major repairs, like fixing a broken appliance or structural issues, usually fall under the landlord’s domain.
                                <br />
                                <br />
                                Review your lease agreement to clarify these responsibilities and establish a clear line of communication with your landlord or property management team.
                                <br />
                                <br />
                                <strong>2. Keep Basic Tools Handy</strong>
                                <br />
                                Having a basic toolkit can be incredibly useful for small repairs. Here’s a list of essential tools you might need:
                                <br />
                                <br />
                                - Screwdrivers (flathead and Phillips)
                                <br />
                                - Hammer
                                <br />
                                - Pliers
                                <br />
                                - Wrench
                                <br />
                                - Tape measure
                                <br />
                                - Utility knife
                                <br />
                                - Drill (optional, but helpful)
                                <br />
                                - A small toolbox or bag to keep these items organized can also be beneficial.
                                <br />
                                <br />
                                <strong>3. Handle Minor Repairs</strong>
                                <br />
                                a. Clogged Drains: Use a plunger to clear minor clogs. For persistent issues, a drain snake can help. Avoid using harsh chemical drain cleaners as they can damage pipes over time.
                                <br />
                                <br />
                                b. Leaky Faucets: Often caused by worn-out washers or O-rings. Turn off the water supply, disassemble the faucet, and replace the worn parts. If the problem persists, you might need to replace the entire faucet or seek professional help.
                                <br />
                                <br />
                                c. Squeaky Doors: Apply a lubricant such as WD-40 to the hinges. This should reduce or eliminate the squeak. If it doesn’t, the hinges might need to be tightened or replaced.
                                <br />
                                <br />
                                d. Light Bulbs: Replace burnt-out bulbs with the correct wattage and type. For hard-to-reach bulbs, a sturdy step ladder will be your best friend.
                                <br />
                                <br />
                                <strong>4. Maintain Appliances</strong>
                                <br />
                                a. Clean Refrigerator Coils: Dust can accumulate on the coils at the back or beneath the refrigerator, affecting its efficiency. Clean them with a vacuum or a brush every six months.
                                <br />
                                <br />
                                b. Run the Dishwasher Regularly: Even if you don’t have dirty dishes, run an empty cycle with a dishwasher cleaner to prevent buildup and odors.
                                <br />
                                <br />
                                c. Check the Washing Machine Hoses: Inspect hoses for any signs of wear or leaks. Replace them every few years to prevent potential flooding.
                                <br />
                                <br />
                                <strong>5. Address Minor Issues with Walls and Floors</strong>
                                <br />
                                a. Fix Small Holes in Walls: Use spackle to fill in small holes or dents. Once it dries, sand the area smooth and paint over it if necessary.
                                <br />
                                <br />
                                b. Repair Scratched Floors: For hardwood floors, use a wood filler that matches the floor’s color. For laminate or tile, special repair kits are available.
                                <br />
                                <br />
                                <strong>6. Stay on Top of Cleaning and Maintenance</strong>
                                <br />
                                Regular cleaning can prevent many maintenance issues. For instance:
                                <br />
                                <br />
                                Clean vents and filters to ensure proper airflow and avoid dust buildup.
                                Inspect grout and caulking in bathrooms and kitchens for any signs of mold or deterioration. Reapply as needed.
                                <br />
                                <br />
                                <strong>7. Know When to Call a Professional</strong>
                                <br />
                                While handling minor repairs yourself can be satisfying, there are times when calling a professional is the best course of action:
                                <br />
                                <br />
                                Electrical Issues: If you’re unsure about electrical repairs, it’s safest to consult a licensed electrician.
                                <br />
                                <br />
                                Plumbing Problems: Persistent leaks or clogs might require the expertise of a plumber.
                                Major Appliances: For issues with large appliances, such as the oven or washing machine, it’s wise to contact the manufacturer or a repair specialist.
                                <br />
                                <br />
                                <strong>8. Document and Report Issues</strong>
                                <br />
                                Keep a record of any maintenance issues and the actions you’ve taken. If you encounter a problem that’s beyond your expertise, report it to your landlord or property management promptly. Documentation can also be useful for follow-up if the issue is not resolved in a timely manner.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Handling basic repairs and maintenance in your apartment doesn't have to be overwhelming. By understanding your responsibilities, keeping essential tools handy, and knowing when to seek professional help, you can manage minor issues effectively and maintain a comfortable living space. Remember, being proactive about small problems can prevent them from escalating into major headaches.
                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}