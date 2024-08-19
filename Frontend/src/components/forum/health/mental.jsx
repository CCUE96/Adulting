import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Mental() {

    const navigate = useNavigate();

    const handleGoBack = () => {

        navigate(-1);
    };

    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}>
                        What are the signs of mental health issues, and where can I get help?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                        <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '24px', textIndent: '2rem' }}>
                            <p>
                                <div style={{ textAlign: 'center' }}>
                                    <span style={{ fontSize: '36px' }}>
                                        Recognizing Signs of Mental Health Issues and Finding Help</span>
                                </div>
                                <br />
                                Mental health is a critical aspect of overall well-being, yet it often doesn’t receive the attention it deserves. Understanding the signs of mental health issues is essential for seeking timely help and support. This article explores common signs of mental health concerns and provides guidance on where and how to seek professional help.
                                <br />
                                <br />
                                <strong>Common Signs of Mental Health Issues</strong>
                            <br />
                            <br />
                            1. Persistent Mood Changes
                            <br />
                            Depression: Symptoms may include prolonged sadness, hopelessness, irritability, or a lack of interest in activities once enjoyed. Individuals might also experience fatigue, changes in appetite, or trouble sleeping.
                            <br />
                            <br />
                            Anxiety: Look for excessive worry, restlessness, or a feeling of impending doom. Physical symptoms like rapid heartbeat, sweating, and muscle tension are also common.
                            <br />
                            <br />
                            2. Changes in Behavior
                            <br />
                            Withdrawal: Social withdrawal or isolation from friends and family can be a sign of mental health issues. Individuals may avoid social activities or become less communicative.
                            <br />
                            <br />
                            Changes in Routine: Significant changes in daily routines, such as neglecting personal hygiene or a sudden decline in work or academic performance, can indicate underlying issues.
                            <br />
                            <br />
                            3. Cognitive and Emotional Disturbances
                            <br />
                            Difficulty Concentrating: Struggles with focus, memory problems, or making decisions can signal mental health concerns. This can be particularly distressing when it affects daily functioning.
                            <br />
                            <br />
                            Emotional Instability: Extreme mood swings, irritability, or feelings of emotional numbness may suggest a mental health disorder.
                            <br />
                            <br />
                            4. Physical Symptoms
                            <br />
                            Unexplained Ailments: Chronic physical symptoms like headaches, stomachaches, or unexplained pain can sometimes be linked to mental health conditions.
                            <br />
                            <br />
                            Sleep Disturbances: Persistent insomnia, excessive sleeping, or disturbed sleep patterns can be related to mental health issues.
                            <br />
                            <br />
                            5. Risky Behaviors
                            <br />
                            Substance Abuse: Increasing reliance on alcohol or drugs can be both a symptom and a coping mechanism for mental health struggles.
                            <br />
                            <br />
                            Self-Harm or Suicidal Thoughts: Engaging in self-harm or expressing thoughts of suicide are urgent signs that require immediate attention.
                            <br />
                            <br />
                            <strong>Where to Get Help</strong>
                        <br />
                        <br />
                        1. Primary Care Physician
                        <br />
                        Initial Assessment: Your primary care doctor can provide an initial evaluation and refer you to a mental health specialist if necessary. They can also help manage any physical health issues that may be contributing to your mental health concerns.
                        <br />
                        <br />
                        2. Mental Health Professionals
                        <br />
                        Psychiatrists: Medical doctors specializing in mental health who can diagnose mental illnesses and prescribe medication.
                        <br />
                        <br />
                        Psychologists: Professionals who offer psychotherapy (talk therapy) and psychological assessments. They can help address mental health issues through various therapeutic techniques.
                        <br />
                        <br />
                        Therapists and Counselors: Licensed professionals who provide talk therapy and counseling. They can help with emotional support and develop coping strategies.
                        <br />
                        <br />
                        3. Crisis Services
                        <br />
                        Crisis Hotlines: Immediate help is available through crisis hotlines such as the Suicide & Crisis Lifeline at 988 in the U.S., which offers 24/7 support for individuals in distress.
                        <br />
                        <br />
                        Emergency Rooms: In cases of severe mental health crises or suicidal thoughts, going to the nearest emergency room is crucial for immediate intervention and safety.
                        <br />
                        <br />
                        4. Community Resources
                        <br />
                        Support Groups: Many communities offer support groups for various mental health issues. These groups provide a space to share experiences and gain support from others facing similar challenges.
                        <br />
                        <br />
                        Nonprofit Organizations: Organizations like the National Alliance on Mental Illness (NAMI) and Mental Health America (MHA) offer resources, support, and education on mental health.
                        <br />
                        <br />
                        5. Online and Telehealth Services
                        <br />
                        Teletherapy: Many therapists and counselors now offer online sessions, making it easier to access mental health services from home. Telehealth platforms provide convenient access to professional support.
                        <br />
                        <br />
                        Mental Health Apps: There are numerous apps designed to support mental well-being, including mood tracking, relaxation exercises, and access to online therapy resources.
                        <br />
                        <br />
                        <strong>How to Seek Help</strong>
                    <br />
                    <br />
                    1. Start with a Conversation: Openly discuss your concerns with a trusted friend or family member. Sometimes sharing your feelings can provide initial support and encouragement to seek professional help.
                    <br />
                    <br />
                    2. Research Resources: Look into local mental health resources, including therapists, support groups, and hotlines. Ensure that the services you choose are reputable and aligned with your needs.
                    <br />
                    <br />
                    3. Schedule an Appointment: Contact a mental health professional to schedule an appointment. Be honest about your symptoms and concerns during the initial consultation.
                    <br />
                    <br />
                    4. Follow Through: Consistently attending appointments and following treatment recommendations is important for managing mental health issues effectively.
                    <br />
                    <br />
                    5. Advocate for Yourself: Don’t hesitate to seek a second opinion or explore different treatment options if you feel your current approach isn’t meeting your needs.
                    <br />
                    <br />
                    <strong>Conclusion</strong>
                <br />
                Recognizing the signs of mental health issues and knowing where to seek help are critical steps toward maintaining mental well-being. By being aware of the symptoms and utilizing available resources, you can take proactive measures to address mental health concerns and improve your quality of life. Remember, seeking help is a sign of strength, and there are numerous resources and professionals ready to support you on your journey to better mental health.




            </p>


        </Typography >
                    
                    </Paper >
                </Box >
            </Box >
        </>
    );
}