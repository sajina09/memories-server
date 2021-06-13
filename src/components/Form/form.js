import React, { useState } from 'react' ;
import useStyles from './styles' ;
import {TextField , Button , Typography, Paper} from '@material-ui/core';
 
const Form = () => {
  const [postData , setPostData ] = useState ({
      
  });
    const classes = useStyles();
    
    const handleSubmit = () => {

    }
    return (
        <Paper className={classes.paper}>
          <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
            <Typography varriant="h6">Creating memories</Typography>
            <TextField 
            name="creator"
             varriant="outlined" 
             label="Creator" 
             fullWidth 
            value={postData.creator} 
            onChange
            />
          </form>

        </Paper>
    );
}

export default Form ;