import React from 'react';
import PropTypes from 'prop-types';
import { SectionTitle } from './App.styled';

export const Section = ({title,children}) => { 
    return (
        <>
        <SectionTitle>
            {title}
        </SectionTitle>
            {children}
        </>
    )
}

Section.propTypes={
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
}

export default Section;