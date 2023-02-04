import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(el => {
    return (
      <ButtonStyled
        type="button"
        onClick={() => {
          onLeaveFeedback(el);
        }}
        key={el}
      >
        {el}
      </ButtonStyled>
    );
  });
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
