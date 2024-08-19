import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function FirstAid() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>
                        What should I include in my first aid kit?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Essential Items to Include in Your First Aid Kit</span>
                                </div>
                                <br />
                                A well-stocked first aid kit is a crucial part of any home, car, or travel preparation. Whether you’re dealing with minor injuries or preparing for emergencies, having a comprehensive first aid kit can make a significant difference in managing and treating injuries effectively. Here’s a guide to what you should include in your first aid kit to ensure you’re prepared for a variety of situations.
                                <br />
                                <br />

                                <strong>1. Basic Supplies</strong>
                                <br />
                                a. Adhesive Bandages: Include a variety of sizes to cover small cuts, blisters, and abrasions. Having both regular and waterproof options can be useful.
                                <br />
                                <br />
                                b. Sterile Gauze Pads: Use these to cover and protect larger wounds or to absorb blood and other fluids. Make sure to include a few different sizes.
                                <br />
                                <br />
                                c. Adhesive Tape: This is used to secure gauze pads or bandages. Medical adhesive tape is typically more suitable for securing dressings without irritating the skin.
                                <br />
                                <br />
                                d. Antiseptic Wipes: These are essential for cleaning wounds before applying bandages. They help to reduce the risk of infection.
                                <br />
                                <br />
                                e. Antibacterial Ointment: An antibiotic ointment like Neosporin helps prevent infection in minor cuts, scrapes, and burns.
                                <br />
                                <br />
                                f. Tweezers: Useful for removing splinters, ticks, or other foreign objects from the skin.
                                <br />
                                <br />
                                g. Scissors: Include a pair of small, sharp scissors to cut tape, gauze, or bandages as needed.
                                <br />
                                <br />
                                h. Thermometer: A digital thermometer helps monitor body temperature in case of fever or illness.
                                <br />
                                <br />
                                i. Disposable Gloves: Latex or nitrile gloves protect you and the injured person from infection and contamination when treating wounds.
                                <br />
                                <br />
                                <strong>2. Medications and Treatments</strong>
                                <br />
                                a. Pain Relievers: Include a supply of over-the-counter pain relievers such as ibuprofen (Advil, Motrin) or acetaminophen (Tylenol) for managing pain or reducing fever.
                                <br />
                                <br />
                                b. Antihistamines: These are useful for treating allergic reactions. Include a basic antihistamine like diphenhydramine (Benadryl) for allergies or insect stings.
                                <br />
                                <br />
                                c. Hydrocortisone Cream: This helps relieve itching and inflammation from insect bites, rashes, or eczema.
                                <br />
                                <br />
                                d. Cough and Cold Medications: Depending on your family’s needs, you might include medications for cough, congestion, or cold symptoms.
                                <br />
                                <br />
                                e. Burn Cream or Gel: A burn cream or gel provides relief for minor burns and sunburns and helps prevent infection.
                                <br />
                                <br />
                                <strong>3. Emergency Items</strong>
                                <br />
                                a. Instant Cold Packs: These are used to reduce swelling and numb pain from sprains, strains, or minor injuries.
                                <br />
                                <br />
                                b. Elastic Bandage: An elastic bandage (such as an Ace bandage) is useful for wrapping and compressing sprains or strains.
                                <br />
                                <br />
                                c. First Aid Manual: A first aid manual or guide provides instructions on how to handle various injuries and emergencies. Ensure it is easy to understand and covers a wide range of scenarios.
                                <br />
                                <br />
                                d. Emergency Contact Information: Include a list of emergency contacts, including family members, doctors, and local emergency services.
                                <br />
                                <br />
                                e. Tweezers and Splinter Remover: Besides basic tweezers, a specialized splinter remover can be helpful for deeper splinters.
                                <br />
                                <br />
                                f. CPR Face Shield or Mask: This allows for safer administration of CPR if needed, providing a barrier between you and the victim.
                                <br />
                                <br />
                                g. Small Flashlight: A flashlight can be essential for providing light in low-visibility situations or during nighttime emergencies.
                                <br />
                                <br />
                                <strong>4. Specialized Items</strong>
                                <br />
                                a. First Aid Manual or Guide: A compact first aid guide or manual provides instructions on how to handle various medical emergencies.
                                <br />
                                <br />
                                b. Emergency Blankets: These compact, reflective blankets help retain body heat in case of shock or exposure to cold temperatures.
                                <br />
                                <br />
                                c. Burn Dressing: Specific burn dressings are designed to soothe and protect burn injuries, especially if you have a lot of cooking or outdoor activities.
                                <br />
                                <br />
                                d. Prescription Medications: If anyone in your household takes specific medications, consider including a supply of those medications in your kit.
                                <br />
                                <br />
                                <strong>5. Packaging and Storage</strong>
                                <br />
                                a. Durable Container: Store your first aid supplies in a waterproof, sturdy container. A well-organized first aid kit will make it easier to find items quickly in an emergency.
                                <br />
                                <br />
                                b. Easy Accessibility: Ensure that the kit is easily accessible to all household members and clearly labeled. It should be kept in a common area known to all, such as a kitchen or utility room.
                                <br />
                                <br />
                                c. Regular Checks and Updates: Regularly check the contents of your first aid kit to ensure that items are in good condition, within their expiration dates, and replenished as needed.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                A well-prepared first aid kit is a crucial component of any home or travel plan, providing essential tools and supplies to address minor injuries and medical emergencies effectively. By including these key items and maintaining your kit regularly, you can be better equipped to handle unexpected situations with confidence. Whether you’re dealing with a scrape, a burn, or a more serious injury, having the right supplies on hand can make a significant difference in ensuring safety and well-being.




                            </p>


                        </Typography>
                
                    </Paper>
                </Box>
            </Box>
        </>
    );
}