import styled from 'styled-components';



export const Section = styled.section`
    display: ${({ display }) => display || 'flex'};
    align-items: ${({ alignItems}) => alignItems || 'center'};
    justify-content: ${({ justifyContent }) => justifyContent || 'center'};
    flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    gap: ${({ gap }) => gap};
    background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
    padding: ${({ padding }) => padding};
`