import { createUseStyles } from "react-jss";

export default createUseStyles((theme) => ({
  paper: {
    margin: {
      top: '8px'
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2px',
  },
  root: {
    '& .MuiTextField-root': {
      margin: '1px',
    },
  },
  avatar: {
    margin: '1px',
    backgroundColor: 'green',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop:'13px',
  },
  submit: {
    margin: {
      top: '3px',
      right: '0px',
      bottom: '2px',
      left: '1rem'
    }
  },
  googleButton: {
    marginTop: '30px',
  },
}));