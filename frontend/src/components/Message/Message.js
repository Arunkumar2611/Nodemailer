import { Container } from '@mui/material'
import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../actions/auth';

const Message = () => {
    const { post } = useSelector((state) => state.posts);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getData());
    })

    return (
        <Container>
            Hi
        </Container>
    )
}

export default Message
