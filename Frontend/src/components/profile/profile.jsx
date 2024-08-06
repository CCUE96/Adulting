import { useState } from 'react';
import { Grid, Avatar, List, ListItem, ListItemText, Box, Typography, Divider, Fab, Dialog, DialogTitle, TextField, Button } from '@mui/material';
import ProfileNav from './profileNav';
import ChatIcon from '@mui/icons-material/Chat';
import profilePic from '../../assets/defaultProfile.jpeg';
import AddIcon from '@mui/icons-material/Add';

const Profile = () => {
  const friends = [ {name: 'Yuki', avatar: profilePic}, {name: 'Kiba', avatar: profilePic}, {name: 'Michael', avatar: profilePic}, {name: 'Kayla', avatar: profilePic}];
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: 2, marginTop: '4.3rem' }}>
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(4px)', borderRadius: 1, padding : 2, height: '76.4vh' }}>
            <Avatar
              alt="Profile Picture"
              src="" 
              sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <Typography sx={{ color: 'white'}}><strong>Name</strong></Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem', border: '1px solid grey', borderRadius: 1, width: '100%', height: '100%', backgroundColor: '#34322f',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ padding: 1, color: 'white' }}>My Friends</Typography>
            <Divider sx={{ width: '100%', marginTop: 1, marginBottom: 1 }} />
            <List>
              {friends.map((friend, index) => (
                <ListItem key={index}>
                  <Avatar sx={{ marginRight: 3}}>{friend.avatar}</Avatar>
                  <ListItemText primary={friend.name} sx={{ color: 'white'}}/>
                </ListItem>
              ))}
              {/* add button to view more */}
            </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ padding: 0, borderRadius: 1, backgroundColor: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(4px)', height: '80vh' }}>
            <Typography variant="h6"></Typography>
            <ProfileNav />
            <Fab color="primary" aria-label="chat" onClick={handleClickOpen} sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor: '#34322f',
        '&:hover': {
            backgroundColor: '#4a4845'
        }
       }}>
      <ChatIcon />
    </Fab>
    <Dialog open={open} onClose={handleClose}
            PaperProps={{
              style: {
                position: 'fixed',
                bottom: 0,
                right: 0,
                height: '50vh',
                overflow: 'auto',
                margin: '1em',
              },
            }}
            BackdropProps={{ invisible: true }}>
                      <Box display="flex" justifyContent="flex-end">
        <DialogTitle sx={{ backgroundColor: '#34322f', color: 'white', maxWidth: '100%' }}>Messages    <Button variant="contained" startIcon={<AddIcon />} onClick={handleClose} color="primary" size="small" sx={{ height: '2rem', width: '0.5'}}/></DialogTitle>
        </Box>
        <TextField
          autoFocus
          margin="dense"
          id="message"
          label="Message"
          type="text"
          fullWidth
        />
        <Button onClick={handleClose} color="primary">
          Send
        </Button>
      </Dialog>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;