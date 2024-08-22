import { useState } from 'react'
// import Divider from '@mui/material/Divider';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Typography, TextField } from '@mui/material';
import { Button } from '@mui/material/'
import ReplyCard from './commentreply';
// import { useMutation } from '@apollo/client';
// import { ADD_REPLY } from '../../utils/mutations';
// import { QUERY_DEBATE } from '../../utils/queries';
// import Auth from '../../utils/auth';

function CommentCard({ comment }) {
 
  const [showReplyBox, setShowReplyBox] = useState(false);
  const [replyComment, setReplyComment] = useState("");
  const [showReplies, setShowReplies] = useState(false)
//   const [createReply] = useMutation(ADD_REPLY, {
//     refetchQueries: [QUERY_DEBATE, "getDebate"]
//   });


  const toggleReplyBox = () => {
    setShowReplyBox(!showReplyBox);
  };

  const toggleShowReplies = () => {
    setShowReplies(!showReplies)
  }
  const handleSubmit = async () => {
    if (!replyComment.trim()) {
      alert("Please enter a comment.");
      return;
    }
    
    // await createReply({
    //   variables: {
    //     commentId: comment.id,
    //     content: replyComment,
    //     userId:  Auth.getProfile().data._id,
    //     username: Auth.getProfile().data.username


    //   }
    // })
    setReplyComment("");
    toggleReplyBox();
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        < div style={{ padding: 14, marginLeft: '200px', marginRight: '200px', width: '60vw' }} className="App">
          <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item>
              
              </Grid>
              <Grid className="yanone" justifyContent="left" item xs zeroMinWidth>
                <Typography variant="h6" component="h4" style={{ margin: 0, textAlign: "left" }}><div className='yanone' style={{color: '#6F5B40'}}>{comment.user.username}</div></Typography>
                <Typography style={{ textAlign: "left", color: '#6F5B40' }}>
                  {comment.commentText}

                </Typography>
               
                <Button variant="outlined" sx={{
                   marginTop: "10px", color: '#6F5B40',
                   '&:hover': {
                    backgroundColor: '#0068c4', 
                    color: 'white', 
                  },
                   
                   }} onClick={toggleReplyBox}>Reply</Button>
                <Button variant="outlined" sx={{ marginTop: "10px", marginLeft: '10px', color:'#6F5B40',
                   '&:hover': {
                    backgroundColor: '#0068c4', 
                    color: 'white', 
                  },
                }} onClick={toggleShowReplies}>Show Replies</Button>
                {showReplyBox && (
                  <>
                    <TextField
                      label="Your Reply"
                      variant="outlined"
                      fullWidth
                      multiline
                      value={replyComment}
                      onChange={(e) => setReplyComment(e.target.value)}
                      rows={4}
                      style={{ marginTop: "10px" }}

                    />
                    <Button onClick={handleSubmit} variant="contained" color="primary" sx={{ marginBottom: '20px', marginTop: '10px' }} disabled={replyComment.length < 20}>
                      Post Reply
                    </Button>
                  </>
                )}

                {showReplies &&
                  comment?.replies?.map(reply => {
                    return <ReplyCard  key={reply._id} reply={reply} />
                  })

                }
              </Grid>
            </Grid>
          </Paper>
        </div >
      </div>
    </>
  )
}

export default CommentCard