import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography, Button } from '@mui/material'

export default function Aid() {

    const navigate = useNavigate();

    const handleGoBack = () => {
       
        navigate(-1);
    };
  
    return (
        <>
            <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80vw', height: '80vh', padding: 2 }}>
                    <h1 style={{ color: 'white', marginRight: '100px', fontSize: '50px' }}> 
                    What should I know about student loans and financial aid repayment?
                    </h1>
                    <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.8)' }}>
                    <Button onClick={handleGoBack}>Go Back</Button>

                        < Typography sx={{ paddingLeft: '50px', paddingRight: '50px', paddingTop: '25px', fontSize: '28px', textIndent: '2rem' }}>
                            <p className='dm-serif-display-regular'>
                                Protecting your passWORD PASSWORD PASSWORD click on suspicious links or give out your personal information to unverified sources.
                                Thirdly, use a secure and private internet connection whenever possible, especially when handling sensitive information.
                                Lastly, keep your devices and any security software up to date to protect against the latest threats.
                                Protecting your personal information online can be achieved through a variety of methods.
                            </p>


                        </Typography>
                        <Typography sx={{ paddingLeft: '50px', paddingRight: '50px', fontSize: '28px', textIndent: '2rem' }}>
                            <p className='dm-serif-display-regular'>

                                Firstly, always ensure that your passwords are strong and unique, and consider using a password manager to keep track of them.
                                Secondly, be wary of phishing attempts - never click on suspicious links or give out your personal information to unverified sources.
                                Thirdly, use a secure and private internet connection whenever possible, especially when handling sensitive information.
                                Lastly, keep your devices and any security software up to date to protect against the latest threats.
                                Protecting your personal information online can be achieved through a variety of methods.
                                Firstly, always ensure that your passwords are strong and unique, and consider using a password manager to keep track of them.
                                Secondly, be wary of phishing attempts - never click on suspicious links or give out your personal information to unverified sources.
                                Thirdly, use a secure and private internet connection whenever possible, especially when handling sensitive information.
                                Lastly, keep your devices and any security software up to date to protect against the latest threats.
                            </p>


                        </Typography>


                        <Typography sx={{ paddingLeft: '50px', paddingRight: '50px', fontSize: '28px', textIndent: '2rem' }}>
                            <p className='dm-serif-display-regular'>

                                Protecting your personal information online can be achieved through a variety of methods.
                                Firstly, always ensure that your passwords are strong and unique, and consider using a password manager to keep track of them.
                                Secondly, be wary of phishing attempts - never click on suspicious links or give out your personal information to unverified sources.
                                Thirdly, use a secure and private internet connection whenever possible, especially when handling sensitive information.
                                Lastly, keep your devices and any security software up to date to protect against the latest threats.
                            </p>
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </>
    );
}