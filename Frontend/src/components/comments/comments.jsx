
import { Typography } from '@mui/material';
import CommentCard from './commentcard';
// import { useQuery } from '@apollo/client';
// import { QUERY_DEBATE } from '../../utils/queries';
// import { useParams } from 'react-router-dom';



function CommentSection() {
//   const {id} = useParams();
//     const {data, loading} = useQuery(QUERY_DEBATE, {
//         variables: {
//           debateId: id
//         }
//     });

    // const comments = data?.debate.comments || []
    const comments = []
   

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', marginTop: '25px', color: 'white'}}>
        <Typography variant="h2" gutterBottom><div className='dm-serif-display-regular'>Comments</div>
        </Typography>
      </div>

      <div style={{ width: '90vw', margin: 'auto' }}> 
        {
          comments?.map(comment => {
            return <CommentCard key={comment.id} comment={comment} />
          })
        }
      </div> 
    </>

  )

}

export default CommentSection