import styled from "styled-components";



export const Input = styled.input`
    width: ${({ $width }) => $width || 'auto'};
    height: ${({ $height }) => $height || 'auto'};
    padding: ${({ $padding }) => $padding || 'auto'};
    border: ${({ $border }) => $border || 'none'};
    border-radius:${({ $borderRadius }) => $borderRadius || '10px'};
    border-color:${({ $borderColor }) => $borderColor || 'grey'};
    background-color:${({ $backgroundColor }) => $backgroundColor || '#fff'};
    box-shadow: ${({ $boxShadow }) => $boxShadow || 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'};
    text-shadow: ${({ $textShadow }) => $textShadow || 'rgba(0, 0, 0, 0.1) 2px 2px 4px'};
    text-transform: ${({ $textTransform }) => $textTransform || 'capitalize'};
    text-align: ${({ $textAlign }) => $textAlign || 'center'};
    color: ${({ $color }) => $color || 'black'};
    font-size: ${({ $fontSize }) => $fontSize || '.8rem'};
    font-weight: ${({ $fontWeight }) => $fontWeight || '100'};
    display: ${({ $display }) => $display || 'center'};
    align-items: ${({ $alignItems }) => $alignItems || 'center'};
    justify-content: ${({ $justifyContent }) => $justifyContent || 'center'};
    outline: ${({ $outline }) => $outline || 'none'};
    transition: ${({ $transition }) => $transition || 'all .8s ease'};
    cursor: ${({ $cursor }) => $cursor || 'pointer'};
    margin: ${({$margin}) => $margin || 'auto'};
    
    &::placeholder{
        text-align: ${({ $textAlignPlaceholder }) => $textAlignPlaceholder || 'center'};
        font-size: ${($fontSizePlaceholder) => $fontSizePlaceholder || '.8rem'};
        color: ${({ $colorPlaceholder }) => $colorPlaceholder || '#333'};
    }

    &:hover{
        border-color: ${({ $borderColorHover }) => $borderColorHover};
        color: ${({ $colorHover }) => $colorHover};
    }

    /* Ícone do calendário */
    
    /* Chrome, Edge, Safari */
    &::-webkit-calendar-picker-indicator {
        filter: invert(1);  /* deixa branco */
        cursor: pointer;
  }

    &::-webkit-calendar-picker-indicator:hover {
        opacity: 1;
    }

  /* Firefox: remove setinha de incremento/decremento */
    &::-moz-inner-spin-button,
    &::-moz-clear {
        display: none;
    }
`;

