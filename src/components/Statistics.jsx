import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsStyled } from './App.Styled';

export const Statistics =  ({good, neutral, bad, total, positivePercentage}) => {
    return(
        <>
        <StatisticsStyled>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
                <li>Bad: {bad}</li>
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage}%</li>
        </StatisticsStyled>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}

export default Statistics;

