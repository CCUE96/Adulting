
import { Grid, Avatar, List, ListItem, ListItemText, Box, Typography, Divider, Fab } from '@mui/material';
import ProfileNav from './profileNav';
import ChatIcon from '@mui/icons-material/Chat';

const Profile = () => {
  const friends = [ {name: 'Yuki', avatar: ''}, {name: 'Kiba', avatar: ''}, {name: 'Michael', avatar: ''}, {name: 'Kayla', avatar: ''}];

  return (
    <div>
      <Grid container spacing={2} sx={{ padding: 2 }}>
        <Grid item xs={3}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'rgba(248, 241, 222, 0.9)', border: '1px solid #ccc', borderRadius: 1, padding : 2, height: '76.4vh' }}>
            <Avatar
              alt="Profile Picture"
              src="" 
              sx={{ width: 100, height: 100, marginBottom: 2 }}
            />
            <Typography><strong>Name</strong></Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem', border: '1px solid grey', borderRadius: 1, width: '100%', height: '100%', backgroundColor: '#fff9ee',  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Typography variant="h6" sx={{ padding: 1 }}>My Friends</Typography>
            <Divider sx={{ width: '100%', marginTop: 1, marginBottom: 1 }} />
            <List>
              {friends.map((friend, index) => (
                <ListItem key={index}>
                  <ListItemText primary={friend.name} />
                </ListItem>
              ))}
              {/* add button to view more */}
            </List>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ padding: 0, borderRadius: 1, backgroundColor: 'rgba(248, 241, 222, 0.9)', height: '80vh' }}>
            <Typography variant="h6"></Typography>
            <ProfileNav />
            <Fab color="primary" aria-label="chat" sx={{ position: 'fixed', bottom: 16, right: 16, backgroundColor: '#34322f',
        '&:hover': {
            backgroundColor: '#4a4845'
        }
       }}>
      <ChatIcon />
    </Fab>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Profile;