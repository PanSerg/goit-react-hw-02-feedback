import React from "react";
import PropTypes from 'prop-types';

export const ReviewOptions = ({ onLeaveReview, options }) => (
    <section>
        {options.map((option, index) => (
            <section type="button" onClick={onLeaveReview} key={index}>
                {option}
            </section>
        ))}
    </section>
);

ReviewOptions.propTypes = {
    onLeaveReview: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
};