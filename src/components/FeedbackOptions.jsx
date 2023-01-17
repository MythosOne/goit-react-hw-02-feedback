import React from 'react';
import PropTypes from 'prop-types';
import { BlockButton, FeedbackButton } from './App.styled';

const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <BlockButton>
            {options.map((option) => (
            <FeedbackButton  key={option} type='button' name={option} onClick={() => onLeaveFeedback(option)}>
                {option}
            </FeedbackButton>
        ))}
        </BlockButton>
        
    );
};

FeedbackOptions.propTypes={
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;