import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTitle = styled.h2`
   {
    font-size: 42px;
  }
`;
const Section = ({ title, children }) => {
  return (
    <section>
      <StyledTitle>{title}</StyledTitle>
      {children}
    </section>
  );
};
export default Section;
Section.propTypes = {
  title: PropTypes.string,
};
