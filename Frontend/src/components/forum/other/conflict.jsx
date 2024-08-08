import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material'


export default function Conflict() {
    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>How do I handle conflict resolution in personal and professional relationships?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                
                           
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Personal Relationships</span>
                                </div>
                                <br />
                         
                                1. Stay Calm and Patient:
                                Before addressing the issue, take a moment to cool down if you're feeling emotional. This helps ensure that you communicate more clearly and respectfully.
                                <br />
                                <br />
                                2. Listen Actively:
                                Give the other person a chance to express their feelings and viewpoints. Show that you’re listening by nodding, making eye contact, and summarizing what they’ve said to ensure you understand.
                                <br />
                                <br />
                                3. Communicate Clearly:
                                Use “I” statements to express your feelings without blaming or criticizing. For example, say “I feel upset when…” instead of “You always…”
                                <br />
                                <br />
                                4. Find Common Ground:
                                Identify shared goals or interests that can help in finding a compromise. This helps in framing the discussion in a way that focuses on mutual benefits.
                                <br />
                                <br />
                                5. Seek Solutions Together:
                                Collaborate to find a resolution that satisfies both parties. Be open to alternatives and compromise when necessary.
                                <br />
                                <br />
                                6. Agree on Follow-Up:
                                Discuss how you will both ensure that the issue doesn’t recur and agree on any steps to take moving forward.
                                <br />
                                <br />
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>Professional Relationships</span>
                                </div>
                                <br />
                            
                                1. Address Issues Promptly:
                                Don’t let conflicts fester. Addressing them sooner rather than later can prevent escalation and shows professionalism.
                                <br />
                                <br />
                                2. Maintain Professionalism:
                                Keep your communication respectful and focused on the issue, not the person. Avoid personal attacks or emotional responses.
                                <br />
                                <br />
                                3. Use Clear, Concise Communication:
                                Be direct and specific about the problem and your perspective. Ensure that you’re understood clearly.
                                <br />
                                <br />
                                4. Focus on Interests, Not Positions:
                                In professional settings, concentrate on underlying interests rather than positions. This can help in finding mutually beneficial solutions.
                                <br />
                                <br />
                                5. Seek Mediation if Needed:
                                If the conflict is severe or you’re unable to resolve it on your own, consider involving a neutral third party to mediate.
                                <br />
                                <br />
                                6. Document Agreements:
                                In a professional context, it’s often useful to document the agreements or resolutions reached, to avoid any misunderstandings later.
                                <br />
                                <br />
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>General Tips</span>
                                </div>
                                <br />
                               
                                Empathy: Always try to understand the other person’s perspective and validate their feelings, even if you don’t agree with them.
                                <br />
                                <br />
                                Open Mind: Be willing to adjust your own views and solutions as new information or perspectives come to light.
                                <br />
                                <br />
                                Reflection: After resolving the conflict, reflect on what worked well and what could be improved for future interactions.
                                <br />
                                <br />

                                Effective conflict resolution builds stronger, more resilient relationships by fostering trust and understanding.
                            </p>


                        </Typography>

                    </Paper>
                </Box>
            </Box>
        </>
    );
}