import { useState } from 'react';
import { Grid, Avatar, List, ListItem, ListItemText, Box, Typography, Divider, Fab, Dialog, DialogTitle, TextField, Button } from '@mui/material';
import ProfileNav from './profileNav';
import ChatIcon from '@mui/icons-material/Chat';
import profilePic from '../../assets/defaultProfile.jpeg';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
            <Box sx={{ display: 'flex', flexDirection: 'column', marginTop: '3rem', border: '1px solid grey', borderRadius: 1, width: '100%', height: '100%', backgroundColor: '#34322f',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ padding: 1, color: 'white',  textAlign: 'center' }}>My Friends</Typography>
            <Divider sx={{ width: '100%', marginTop: 1, marginBottom: 1 }} />
            <List>
              {friends.map((friend, index) => (
                <ListItem key={index}>
                  <Avatar sx={{ marginRight: 3, alignItems: 'left'}}>{friend.avatar}</Avatar>
                  <ListItemText primary={friend.name} sx={{ color: 'white', marginLeft: '3rem'}}/>
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
                width: '30vw',
              },
            }}
            BackdropProps={{ invisible: true }}>
     <Box display="flex" justifyContent="center" alignItems="center" width="100%">
     <DialogTitle sx={{ backgroundColor: '#34322f', color: 'white', width: '100%', textAlign: 'center', position: 'relative' }}>
    <Typography variant="h6">Messages</Typography>
    <IconButton onClick={handleClose} color="primary" sx={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', marginRight: '1rem', color: 'white', backgroundColor: 'none' }}>
      <CloseIcon />
    </IconButton>
  </DialogTitle>
    </Box>
        <Box>
          <Typography sx={{ textAlign: 'center', marginTop: '10rem', color: 'lightgray'}}>No Current Messages...</Typography>
        </Box>
        <Box display="flex" flexDirection="column" justifyContent="flex-end" height="100%">
        <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
        <TextField
    autoFocus
    margin="dense"
    id="message"
    label="Message"
    type="text"
    fullWidth
    InputProps={{
      endAdornment: (
        <InputAdornment position="end">
          <IconButton onClick={handleClose} color="primary">
            <SendIcon />
          </IconButton>
        </InputAdornment>
      ),
    }}
    sx={{ width: '80%', marginLeft: '1rem'}} // possibly make invisible until clicking in a dm with a friend
  />
   <IconButton onClick={handleClose} color="primary" sx={{ marginRight: '1rem' }}>
      <AddIcon />
    </IconButton>
  </Box>
  </Box>
      </Dialog>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;