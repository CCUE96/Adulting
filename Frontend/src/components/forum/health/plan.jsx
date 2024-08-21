import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Plan() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> How do I choose a health insurance plan that&apos;s right for me?

                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        How to Choose a Health Insurance Plan That's Right for You</span>
                                </div>
                                <br />
                                Selecting the right health insurance plan is crucial for managing your healthcare needs and budget effectively. With various options available, it can be challenging to determine which plan best suits your needs. Here’s a comprehensive guide to help you choose a health insurance plan that aligns with your health requirements, financial situation, and personal preferences.
                                <br />
                                <br />
                                <strong>1. Understand Your Healthcare Needs</strong>
                                <br />
                                a. Assess Your Health Status: Consider your current health condition, any ongoing medical treatments, and anticipated healthcare needs. If you have chronic conditions or expect to need frequent medical care, look for plans that offer comprehensive coverage.
                                <br />
                                <br />
                                b. Consider Your Family’s Needs: If you’re choosing a plan for your family, evaluate each member’s health needs. Factor in any specific requirements such as pediatric care, maternity services, or specialist treatments.
                                <br />
                                <br />
                                c. Review Prescription Medication Needs: Check if you need regular prescriptions. Compare how different plans cover prescription medications, including the list of covered drugs and out-of-pocket costs.
                                <br />
                                <br />
                                <strong>2. Compare Plan Types</strong>
                                <br />
                                a. Health Maintenance Organization (HMO): HMO plans typically require you to choose a primary care physician (PCP) and get referrals from your PCP to see specialists. They often have lower premiums and out-of-pocket costs but require you to use a network of providers.
                                <br />
                                <br />
                                b. Preferred Provider Organization (PPO): PPO plans offer more flexibility in choosing healthcare providers and don’t require referrals to see specialists. They generally have higher premiums but provide greater freedom in accessing out-of-network care.
                                <br />
                                <br />
                                c. Exclusive Provider Organization (EPO): EPO plans require you to use network providers for all services except emergencies. They often have lower premiums and out-of-pocket costs but offer less flexibility in provider choice.
                                <br />
                                <br />
                                d. Point of Service (POS): POS plans combine features of HMO and PPO plans. You choose a primary care doctor and need referrals for specialists but can also see out-of-network providers at a higher cost.
                                <br />
                                <br />
                                e. High-Deductible Health Plans (HDHPs): HDHPs have lower premiums but higher deductibles. They are often paired with Health Savings Accounts (HSAs), allowing you to save pre-tax money for medical expenses. They can be a good option if you’re generally healthy and want lower monthly premiums.
                                <br />
                                <br />
                                <strong>3. Evaluate Costs</strong>
                                <br />
                                a. Premiums: This is the monthly amount you pay for your insurance. Compare premiums across different plans to find one that fits your budget.
                                <br />
                                <br />
                                b. Deductibles: The deductible is the amount you pay out-of-pocket before your insurance starts to cover costs. Lower deductibles mean higher premiums and vice versa. Consider how much you can afford to pay out-of-pocket.
                                <br />
                                <br />
                                c. Copayments and Coinsurance: Copayments are fixed amounts you pay for specific services (e.g., $20 for a doctor’s visit). Coinsurance is a percentage of the cost you share with the insurer after meeting your deductible (e.g., 20% of the cost). Understand these costs and how they fit into your budget.
                                <br />
                                <br />
                                d. Out-of-Pocket Maximum: This is the maximum amount you’ll have to pay in a year for covered services. Once you reach this limit, the insurance covers 100% of covered services. Make sure the out-of-pocket maximum is manageable for your financial situation.
                                <br />
                                <br />
                                <strong>4. Check Provider Networks</strong>
                                <br />
                                a. In-Network vs. Out-of-Network: Verify which doctors, specialists, and hospitals are included in each plan’s network. If you have preferred healthcare providers, ensure they are included in the network of the plan you are considering.
                                <br />
                                <br />
                                b. Network Size and Accessibility: Evaluate the size of the network and the accessibility of providers. Larger networks offer more choices and greater flexibility in accessing care.
                                <br />
                                <br />
                                <strong>5. Review Coverage Details</strong>
                                <br />
                                a. Essential Benefits: Ensure the plan covers essential health benefits, including preventive services, emergency care, mental health services, and maternity care.
                                <br />
                                <br />
                                b. Additional Benefits: Look for additional benefits such as wellness programs, telemedicine services, or alternative medicine coverage. These can add value to your plan and enhance your overall healthcare experience.
                                <br />
                                <br />
                                c. Exclusions and Limitations: Carefully review the plan’s exclusions and limitations. Some plans may not cover certain services or treatments, so it’s important to understand what’s not included.
                                <br />
                                <br />
                                <strong>6. Consider Your Budget and Financial Goals</strong>
                                <br />
                                a. Short-Term vs. Long-Term Costs: Balance your monthly premiums with potential out-of-pocket costs. A plan with lower premiums may have higher out-of-pocket expenses, which can add up over time.
                                <br />
                                <br />
                                b. Financial Assistance: If you’re eligible, explore financial assistance programs, such as subsidies through the Health Insurance Marketplace, that can help lower your premiums and out-of-pocket costs.
                                <br />
                                <br />
                                <strong>7. Use Online Tools and Resources</strong>
                                <br />
                                a. Comparison Tools: Utilize online comparison tools provided by health insurance marketplaces or independent websites to compare different plans side-by-side.
                                <br />
                                <br />
                                b. Plan Ratings and Reviews: Check reviews and ratings of health insurance plans from other policyholders. This can provide insights into the quality of care and customer service.
                                <br />
                                <br />
                                <strong>8. Seek Professional Guidance</strong>
                                <br />
                                a. Insurance Brokers: Insurance brokers can help you navigate the complexities of health insurance and find a plan that meets your needs. They can provide personalized recommendations and assist with enrollment.
                                <br />
                                <br />
                                b. Enrollment Assistance: Many health insurance marketplaces offer enrollment assistance and customer support to help you understand your options and make an informed decision.
                                <br />
                                <br />
                                <strong>Conclusion</strong>
                                <br />
                                Choosing the right health insurance plan requires careful consideration of your healthcare needs, budget, and the specifics of each plan. By evaluating premiums, deductibles, provider networks, and coverage details, you can make a well-informed decision that aligns with your financial situation and health requirements. Utilize available resources, seek professional advice if needed, and select a plan that provides the best balance of cost and coverage for you and your family.
                            </p>


                        </Typography>

                    </Paper>
                </Box>
            </Box>
        </>
    );
}