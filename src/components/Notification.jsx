import React from 'react';
import PropTypes from 'prop-types';
import { NotificationTitle } from './App.Styled';


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

