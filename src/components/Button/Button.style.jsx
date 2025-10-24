import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ colorBackground }) => colorBackground || 'white' }; 
    color: ${({ colorFont }) => colorFont || 'black'};
    border: ${({ border }) => border || '2px solid black'};
    border-radius: ${({ borderRadius}) => borderRadius || '0'};
    padding: ${({ padding }) => padding || '0'};
    font-size: ${({ fontSize }) => fontSize || '1rem'};
    text-shadow: ${({ textShadow }) => textShadow || '2px 2px 4px rgba(0, 0, 0, 0.1)'};
    cursor: ${({ cursor }) => cursor || 'pointer'};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin};

    &:hover{
        border-color: ${({ borderColorHover }) => borderColorHover || 'black'}; 
    }
`