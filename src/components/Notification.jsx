import React from 'react';
import PropTypes from 'prop-types';
import { NotificationTitle } from './App.styled.js';


const Notification = ({ message }) => {
    return (
        <>
            <NotificationTitle>{message}</NotificationTitle>
        </>
    )
};

Notification.propTypes={
    message: PropTypes.string.isRequired
}

export default Notification

