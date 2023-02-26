import React from "react";
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
    return (
        <div>
            <section>{title}</section>
            {children}
        </div>
    );
};

Section.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};
