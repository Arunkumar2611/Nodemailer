import React, { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import EmailIcon from "@mui/icons-material/Email";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { sendData } from "../../actions/auth";


const initialState = { to: "", message: "", subject: "" }
const Send = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [mainData, setMainData] = useState(initialState);

    const handleChange = (e) => {
        setMainData({ ...mainData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const from = user.result.email;
        dispatch(sendData({...mainData, from: from}, navigate));
    }

    return (
        <Container maxWidth="sm" >
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "62ch" },
                    "bgcolor":"white"
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="input-with-icon-textfield"
                    name="to"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                    placeholder="To"
                    onChange={handleChange}
                />
                <TextField
                    id="input-with-icon-textfield"
                    name="subject"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SubjectIcon />
                            </InputAdornment>
                        ),
                    }}
                    variant="filled"
                    placeholder="Subject"
                    onChange={handleChange}
                />
                <TextField
                    id="input-with-icon-textfield"
                    name="message"
                    variant="filled"
                    placeholder="Message"
                    multiline
                    rows={4}
                    onChange={handleChange}
                />
                {/* <Stack direction="row" spacing={2} justifyContent="center"
                    alignItems="center"> */}
                    <Button variant="contained" fullWidth endIcon={<SendIcon />} onClick={handleSubmit}>
                        Send
                    </Button>
                {/* </Stack> */}
            </Box>
        </Container>
    );
};

export default Send;
