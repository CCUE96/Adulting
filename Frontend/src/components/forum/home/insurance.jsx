import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Insurance() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> What should I know about renters insurance and why is it important?

                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        What You Need to Know About Renters Insurance and Why It’s Important</span>
                                </div>
                                <br />
                                Renters insurance often flies under the radar for many people, yet it is a crucial component of responsible renting. Understanding what renters insurance is, what it covers, and why it's important can help you make an informed decision about protecting your belongings and your financial well-being. Here’s a comprehensive guide on renters insurance and why you should consider getting it.
                                <br />
                                <br />

                                <strong>What is Renters Insurance?</strong>
                                <br />
                                Renters insurance is a type of insurance policy designed for individuals who rent their living space. Unlike homeowners insurance, which covers the structure of the home, renters insurance focuses on protecting your personal property and providing liability coverage.
                                <br />
                                <br />
                                <strong>What Does Renters Insurance Cover?</strong>
                                <br />
                                1. Personal Property Coverage
                                <br />

                                Protection Against Losses: Renters insurance covers your personal belongings, such as furniture, electronics, clothing, and other items, against risks like fire, theft, vandalism, and certain natural disasters.
                                <br />
                                <br />
                                Replacement or Repair Costs: If your belongings are damaged or stolen, your insurance policy can help cover the cost of repairing or replacing them. Policies typically offer replacement cost or actual cash value coverage, with replacement cost being the more comprehensive option as it covers the cost of buying new items without depreciation.
                                <br />
                                <br />
                                2. Liability Coverage
                                <br />
                                Legal Protection: Liability coverage protects you in the event you are held responsible for causing injury to someone else or damaging their property. For example, if a guest is injured in your apartment due to negligence, renters insurance can help cover medical expenses and legal fees.
                                <br />
                                <br />
                                Damage to Property: If you accidentally cause damage to the rental property or a neighbor’s property, such as a fire or flooding, liability coverage can help with the repair costs and legal expenses.
                                <br />
                                <br />
                                3. Additional Living Expenses
                                <br />
                                Temporary Relocation Costs: If your rental becomes uninhabitable due to a covered loss (e.g., fire or flood), renters insurance can cover the cost of temporary accommodations, such as a hotel or temporary rental, as well as additional living expenses.
                                Medical Payments Coverage
                                <br />
                                <br />
                                Minor Injuries: This coverage helps with medical bills if a guest is injured in your home, regardless of who is at fault. It’s a smaller amount than liability coverage but can be useful for minor injuries.
                                <br />
                                <br />
                                <strong>Why is Renters Insurance Important?</strong>
                                <br />
                                1. Protects Your Belongings
                                <br />
                                Financial Security: Without renters insurance, you would need to bear the full financial burden of replacing lost or damaged possessions. Insurance provides a safety net, ensuring you’re not left with significant out-of-pocket expenses.
                                <br />
                                <br />
                                2. Liability Protection
                                <br />
                                Legal and Financial Safety: Accidents can happen, and renters insurance helps protect you from potentially costly legal claims and financial responsibilities. It’s a critical safety net that can prevent significant financial strain.
                                <br />
                                <br />
                                3. Affordability
                                <br />
                                Cost-Effective Coverage: Renters insurance is generally affordable, with premiums often costing less than a few dollars per month. Given the level of protection it provides, it’s a relatively low-cost investment for peace of mind.
                                <br />
                                <br />
                                4. Required by Landlords
                                <br />
                                Lease Agreements: Some landlords or property management companies require tenants to carry renters insurance as part of the lease agreement. This requirement helps ensure that tenants are financially responsible and protected.
                                <br />
                                <br />
                                5. Additional Living Expenses
                                <br />

                                Financial Relief: In the event your apartment is rendered uninhabitable, renters insurance can help with the costs of temporary housing and additional living expenses, alleviating some of the financial stress during a challenging time.
                                <br />
                                <br />
                                <strong>How to Choose the Right Renters Insurance Policy</strong>
                                <br />
                                <br />
                                1. Assess Your Needs
                                <br />
                                Inventory Your Belongings: Take an inventory of your possessions and their value to determine how much coverage you need. Consider high-value items, such as electronics or jewelry, which may require additional coverage.
                                <br />
                                <br />
                                2. Compare Policies
                                <br />
                                Shop Around: Different insurance companies offer varying coverage options and premiums. Compare policies to find one that fits your needs and budget.
                                <br />
                                <br />
                                3. Understand the Terms
                                <br />
                                Read the Fine Print: Be sure to understand what is and isn’t covered under the policy. Check for any exclusions, such as natural disasters like earthquakes or floods, which may require separate coverage.
                                <br />
                                <br />
                                4. Review Deductibles
                                <br />
                                Consider Deductibles: The deductible is the amount you pay out-of-pocket before insurance kicks in. Choose a deductible that you can comfortably afford in the event of a claim.
                                <br />
                                <br />
                                5. Seek Professional Advice
                                <br />
                                Consult an Agent: An insurance agent can help clarify any questions you have about coverage options, terms, and the claims process.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                            <br />
                            Renters insurance is a valuable and affordable way to protect your personal property, provide liability coverage, and ensure financial security in the event of unforeseen circumstances. By understanding what renters insurance covers and why it’s important, you can make an informed decision about securing the protection you need for your rental living situation. Don’t wait until it’s too late—consider getting renters insurance today and enjoy peace of mind knowing that you’re covered.
                        </p>


                    </Typography>

                </Paper>
            </Box>
        </Box >
        </>
    );
}