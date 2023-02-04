import React from 'react';
import PropTypes from 'prop-types';
import { StyledTitle } from './Section.styled';
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
  children: PropTypes.node,
};
