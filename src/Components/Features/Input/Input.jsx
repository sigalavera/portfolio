import React, { useEffect, useRef } from 'react';
import '../../Pages/ContactMe/ContactMe.css';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import SendButton from '../../Features/Button/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Input() {
  const classes = useStyles();
  const STYLE = { marginBottom: "-38px", height: "91vh" }
  
  const inputRef = useRef();
  useEffect(()=>{
    inputRef.current.focus();
  })

  return (
    <div style={{ backgroundImage: "url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)"}}>
      <div className="formDiv" style={STYLE}>
      <h1 className="title1"> Keep in touch </h1>
      <h1 className="title2"> Keep in touch </h1>
        <form className={classes.root} noValidate autoComplete="off" action="https://formsubmit.co/sigi1697@gmail.com" method="POST" encType="text/plain" target="blanc" >

          <TextField id="standard-basic" label="First Name" name="fisrtName" type="text" inputRef={inputRef}/><br></br>
          <TextField id="standard-basic" label="Last Name"  name="lastName" type="text"/><br></br>
          <TextField id="standard-basic" label="Email" name="email" type="email"/><br></br>
          <TextField id="textBox" label="Message" width="10px" name="mas" type="text"/><br></br>

          <SendButton />
        </form>
      </div>
    </div>
  );
}
