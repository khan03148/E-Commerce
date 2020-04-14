//styled componet for buttons
import styled from 'styled-components';

export const ButtonComponent = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent; 

// var(--lightBlue) are from app.css we used here
border: 0.05rem solid var(--lightBlue);

//receive props and change color for specific button
border-color: ${props => props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};

color: ${prop => prop.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0.2rem 0;
transition: all 0.5s ease-in-out;

// & is the (ButtonComponent) on hover
&:hover {
    background: ${prop => prop.cart ? "var(--mainYellow)": "var(--lightBlue)"};
    color: var(--mainBlue);
}
&:focus {
    outline:none
}
`;