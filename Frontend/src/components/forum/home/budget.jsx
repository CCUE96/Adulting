import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Budget() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>  What should I consider when creating my first apartment budget?

                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        Creating Your First Apartment Budget: Key Considerations</span>
                                </div>
                                <br />
                                Moving into your first apartment is a significant milestone, but it comes with the responsibility of managing your finances effectively. Creating a realistic and comprehensive budget is essential for maintaining financial stability and avoiding unnecessary stress. Here’s a guide to help you navigate the process of setting up your first apartment budget.
                                <br />
                                <br />
                                <strong>1. Determine Your Income</strong>
                                <br />
                                a. Calculate Net Income: Start by calculating your net income, which is the amount you take home after taxes and other deductions. This will be the foundation for your budget. Include all sources of income, such as your salary, side gigs, or any financial support.
                                <br />
                                <br />
                                b. Be Realistic: If your income varies, use a conservative estimate based on your lowest monthly earnings. This approach ensures that you have a safety net for months with lower income.
                                <br />
                                <br />
                                <strong>2. Identify Essential Expenses</strong>
                                <br />
                                a. Rent: Your rent will likely be your largest expense. Ensure it fits within the typical guideline of no more than 30% of your gross monthly income. Factor in any additional fees like parking or pet charges.
                                <br />
                                <br />
                                b. Utilities: Budget for essential utilities, such as electricity, water, gas, and trash collection. Review past bills if possible, or ask your landlord for estimates. Don’t forget about internet and cable, which may also be considered essential for your lifestyle.
                                <br />
                                <br />
                                c. Groceries: Estimate your monthly grocery bill based on your eating habits. Plan for basic staples and occasional extras. Consider using a meal plan to help manage this expense more effectively.
                                <br />
                                <br />
                                d. Transportation: Include costs related to transportation, whether it's public transit, gas, car maintenance, or insurance. Make sure to account for any commute-related expenses.
                                <br />
                                <br />
                                e. Insurance: Renters insurance is often an affordable way to protect your belongings and provide liability coverage. It’s a wise investment for financial security and peace of mind.
                                <br />
                                <br />
                                <strong>3. Plan for Variable and Non-Monthly Expenses</strong>
                                <br />
                                a. Entertainment and Dining Out: Allocate a reasonable amount for social activities, dining out, and entertainment. Setting a cap helps you enjoy these activities without overspending.
                                <br />
                                <br />
                                b. Healthcare: Budget for health-related expenses, including insurance premiums, co-pays, medications, and occasional doctor visits. If you have regular prescriptions or medical needs, plan accordingly.
                                <br />
                                <br />
                                c. Emergency Fund: Establish a fund for unexpected expenses or emergencies. Aim to save at least 3-6 months’ worth of living expenses to cover situations like job loss or unforeseen repairs.
                                <br />
                                <br />
                                d. Maintenance and Repairs: Set aside a small amount each month for potential repairs or maintenance. While your landlord might handle some repairs, it's still prudent to budget for small issues or replacements, like light bulbs or cleaning supplies.
                                <br />
                                <br />
                                e. Personal Savings and Retirement: Contribute to a savings account and, if possible, a retirement plan. Even small amounts can add up over time and help you build financial security for the future.
                                <br />
                                <br />
                                <strong>4. Track Your Spending</strong>
                                <br />
                                a. Use Budgeting Tools: Utilize budgeting apps or spreadsheets to track your income and expenses. Many apps offer features to categorize spending and provide insights into your financial habits.
                                <br />
                                <br />
                                b. Regular Reviews: Regularly review and adjust your budget as needed. Track your actual spending versus your budgeted amounts to identify areas where you might need to cut back or adjust.
                                <br />
                                <br />
                                <strong>5. Plan for Initial Expenses</strong>
                                <br />
                                a. Security Deposit: Be prepared to pay a security deposit, which is often required when signing a lease. This deposit is refundable at the end of your lease, provided the apartment is in good condition.
                                <br />
                                <br />
                                b. Moving Costs: Factor in the costs of moving, such as hiring movers, renting a truck, or buying packing supplies. These expenses can add up, so include them in your initial budget.
                                <br />
                                <br />
                                c. Furniture and Supplies: Budget for essential furniture and household items. Prioritize necessities like a bed, table, and chairs, and consider purchasing second-hand or budget-friendly options to save money.
                                <br />
                                <br />
                                <strong>6. Set Financial Goals</strong >
                                <br />
                                a.Short - Term Goals: Set financial goals for the near future, such as saving for a vacation or paying off a credit card.Break these goals into manageable steps and track your progress.
                                < br />
                                <br />
                                b.Long - Term Goals: Consider long - term goals, such as saving for a down payment on a house or building a substantial emergency fund.Plan and save consistently to achieve these objectives.
                                < br />
                                <br />
                                <strong>7. Stay Flexible</strong >
                                <br />
                                a.Adjust as Needed: Life circumstances and financial situations can change.Be prepared to adjust your budget as needed based on changes in income, expenses, or financial goals.
                                < br />
                                <br />
                                b.Maintain a Positive Attitude: Budgeting can be challenging, especially when starting out.Stay positive and motivated by focusing on the benefits of financial stability and the progress you’re making.
                                < br />
                                <br />
                                <strong>Conclusion</strong >
                                <br />
                                Creating your first apartment budget is an important step toward financial independence and stability.By carefully considering your income, essential expenses, and financial goals, you can create a realistic and manageable budget that supports your lifestyle while preparing for the future.Regularly review and adjust your budget as needed, and embrace the process as a valuable tool for achieving your financial goals.With careful planning and disciplined spending, you can enjoy the freedom of living on your own while maintaining financial security.




                            </p >


                        </Typography >
                    </Paper >
                </Box >
            </Box >
        </>
    );
}