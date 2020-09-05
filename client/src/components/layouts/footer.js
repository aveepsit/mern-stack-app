import React from 'react';
import styled from 'styled-components';

const footer = () => {
    return (
        <FooterContainer>
            <span style={{color: "#fff", top: "1.5rem", left: "1rem", position: "relative" }}>
                &copy;{new Date().getFullYear()} All Rights Reserved.
            </span>
        </FooterContainer>
    );
};

export default footer;

//FOOTER CONTAINER
const FooterContainer = styled.footer`
    background: #344;
    height: 4rem;
    
    left: 0;
    bottom: 0;
    width: 100%;
`;

