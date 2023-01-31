import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
   {
    padding: 20px 30px;
    margin-right: 5px;
    font-size: 24px;
    border-radius: 5px;
    &:hover {
      color: white;
      background: black;
    }
  }
`;

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map(el => {
    return (
      <ButtonStyled type="button" onClick={onLeaveFeedback} key={el}>
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
