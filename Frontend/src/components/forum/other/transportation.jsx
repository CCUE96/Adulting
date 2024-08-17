import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material'


export default function Transportation() {
    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>What are the basics of renting a car or using public transportation?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p className='dm-serif-display-regular'>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Navigating Transportation: Basics of Renting a Car and Using Public Transit</span>
                                </div>
                                <br />
                                <br />
                                Whether you’re traveling to a new city, going on vacation, or simply need a temporary vehicle, understanding the basics of renting a car and using public transportation can significantly enhance your experience. Both options have their own set of considerations, benefits, and challenges. This guide will provide you with essential information to make informed decisions about car rentals and public transit.
                                <br />
                                <br />
                                Renting a Car: What You Need to Know
                                <br />
                                <br />
                                <strong>1. Choose the Right Rental Company</strong>
                                <br />
                                
                                Reputation and Reviews: Look for rental companies with positive reviews and a good reputation for customer service. Popular options include Enterprise, Hertz, Avis, and Budget.
                                <br />
                                <br />
                                Compare Rates: Use comparison websites like Kayak or Expedia to compare rates across different rental companies. Look for deals and discounts that might be available.
                                <br />
                                <br />
                                <strong>2. Understand Rental Requirements</strong>
                                <br />
                                Age Restrictions: Most rental companies require drivers to be at least 21 years old. Drivers under 25 may incur a “young driver” surcharge.
                                Driver’s License: A valid driver’s license is necessary. If you're renting in a foreign country, an International Driving Permit (IDP) might be required.
                                <br />
                                <br />
                                Credit Card: A major credit card is typically needed for the deposit. Some companies may accept debit cards, but this can vary.
                                <br />
                                <br />
                                <strong>3. Choose the Right Vehicle</strong>
                                <br />
                                Size and Type: Consider your needs. For solo travel, a compact car may suffice, while a larger group may need an SUV or minivan.
                                Fuel Efficiency: Opt for a fuel-efficient vehicle if you plan on driving long distances to save on fuel costs.
                                <br />
                                <br />
                                <strong>4. Understand Insurance and Fees</strong>
                                <br />
                                Insurance Options: Rental companies offer various insurance options, including collision damage waiver (CDW) and theft protection. Check your personal auto insurance policy and credit card benefits to see if you’re already covered.
                                <br />
                                <br />
                                Additional Fees: Be aware of extra fees such as those for additional drivers, GPS rental, child seats, and drop-off charges if you return the car to a different location.
                                <br />
                                <br />
                                <strong>5. Inspect the Vehicle</strong>
                                <br />
                                Before Driving Off: Thoroughly inspect the car for any existing damage and report it to the rental company to avoid being charged for it later.
                                During the Rental: Keep track of any issues or concerns with the vehicle and report them to the rental company.
                                <br />
                                <br />
                                <strong>6. Return the Vehicle</strong>
                                <br />
                                Fuel Policy: Most rental companies require you to return the car with a full tank of gas. Be sure to refuel before returning to avoid additional charges.
                                <br />
                                <br />
                                Timing: Return the car on time to avoid extra charges. If you need to extend your rental, contact the rental company as soon as possible.
                                Using Public Transportation: Key Points
                                <br />
                                <br />
                                1. Research Local Options
                                <br />
                                
                                Types of Public Transit: Different cities offer various public transportation options, including buses, subways, trams, ferries, and trains. Research the options available in your area of travel.
                                <br />
                                <br />
                                Routes and Schedules: Check routes and schedules ahead of time. Most cities provide online maps and schedules. Apps like Google Maps and Citymapper can help plan your trips.
                                <br />
                                <br />
                                2. Purchase Tickets or Passes
                                <br />
                                
                                Single Tickets: For occasional use, single tickets might be the best option. These can usually be purchased from vending machines, kiosks, or drivers.
                                <br />
                                <br />
                                Travel Passes: For frequent travel, consider a travel pass or card that offers unlimited rides within a certain period. Passes are often available for daily, weekly, or monthly use.
                                <br />
                                <br />
                                3. Understand Payment Methods
                                <br />
                                Contactless Payment: Many transit systems accept contactless payments via credit/debit cards or mobile payment apps. Look for card readers or payment terminals at stations and vehicles.
                                <br />
                                <br />
                                Cash: Some systems still accept cash, but exact change is often required. Check the local payment methods accepted.
                                <br />
                                <br />
                                4. Know the Rules and Etiquette
                                <br />
                                Behavior: Follow local rules and etiquette, such as giving up seats for elderly passengers and keeping noise levels down.
                                <br />
                                <br />
                                Safety: Be aware of your surroundings, especially in unfamiliar areas. Keep your belongings secure and be cautious of pickpockets.
                                <br />
                                <br />
                                5. Plan Your Routes
                                <br />
                                Transfers: If your journey requires multiple transfers, plan your route carefully to minimize wait times and avoid getting lost.
                                <br />
                                <br />
                                Travel Time: Factor in travel times and potential delays. Public transportation can sometimes be slower than other options, so plan accordingly.
                                <br />
                                <br />
                                6. Accessibility
                                <br />
                                Accessibility Features: Many public transit systems offer accessibility features such as ramps, elevators, and priority seating. If you have specific needs, check the accessibility options available.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Understanding the basics of renting a car and using public transportation can make your travels smoother and more enjoyable. Renting a car offers flexibility and convenience, especially for exploring areas beyond public transit routes. Public transportation provides a cost-effective and environmentally friendly alternative, particularly in urban areas where driving and parking can be challenging. By familiarizing yourself with the key aspects of each option, you can make informed decisions that best suit your travel needs and preferences.
                            </p>


                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}