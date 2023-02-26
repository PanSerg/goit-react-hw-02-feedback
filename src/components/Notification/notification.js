import React from "react";
import PropTypes from 'prop-types';

export const Notification = ({ message }) => {
    return <section>{message}</section>;
};

Notification.propType = {
    message: PropTypes.string.isRequired
};