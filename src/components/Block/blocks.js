import React from "react";
import PropTypes from 'prop-types';

export const Block = ({ title, children }) => {
    return (
        <div>
            <section>{title}</section>
            {children}
        </div>
    );
};

Block.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired
};
