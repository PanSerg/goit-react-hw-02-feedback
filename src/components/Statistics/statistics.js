import React from "react";
import PropTypes from 'prop-types'


export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
    return (
    <section>
      <li>
        <h3>Good: {good}</h3>
      </li>
      <li>
        <h3>Neutral: {neutral}</h3>
      </li>
      <li>
        <h3>Bad: {bad}</h3>
      </li>
      <li>
        <h3>Total: {total}</h3>
      </li>
      <li>
        <h3>Positive feedback: {positivePercentage}%</h3>
      </li>
        </section>
    );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};