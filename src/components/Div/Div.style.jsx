import styled from "styled-components";



export const Div = styled.div`
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    border: ${({ border }) => border || 'none'};
    border-radius: ${({ borderRadius }) => borderRadius};
    background-color: ${({ backgroundColor }) => backgroundColor};
    padding: ${({ padding }) => padding};
    display: ${({ display }) => display || 'flex'};
    align-items: ${( alignItems ) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    gap: ${({ gap }) => gap};
`