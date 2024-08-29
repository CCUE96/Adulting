import React from "react";

import { Paper } from "@mui/material";
import PostSection from "./commentpost";
import CommentSection from "./comments";


export default function Comments() {

    return(
        <>
      <Paper elevation={3} sx={{ overflowY: 'auto', backgroundColor: 'rgba(48, 91, 84, 0.8)', width: '90vw'}}>
        <PostSection/>
        <CommentSection/>
        </Paper>
        
        </>
    )
}