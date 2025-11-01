import styled from "styled-components";



export const Input = styled.input`
    width: ${({$width})=> $width || '0'};
    height: ${({$height})=> $height || '0'};
    padding: ${({$padding})=> $padding || '0'};
    border: ${({$border})=> $border || 'none'};
    border-radius:${({$borderRadius})=> $borderRadius || '0'};
    border-color:${({$borderColor})=> $borderColor || 'grey'};
    background-color:${({$backgroundColor})=> $backgroundColor || '#fff'};
    box-shadow: ${({$boxShadow}) => $boxShadow || 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;'};
    text-shadow: ${({$textShadow}) => $textShadow || 'rgba(0, 0, 0, 0.1) 2px 2px 4px'};
    text-transform: ${({$textTransform}) => $textTransform || 'capitalize'};
    text-align: ${({$textAlign}) => $textAlign || 'center'};
    color: ${({$color}) => $color || 'black'};
    font-size: ${({$fontSize}) => $fontSize || '.8rem'};
    font-weight: ${({$fontWeight}) => $fontWeight || '100'};
    display: ${({$display}) => $display || 'center'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'center'};
    outline: ${({$outline}) => $outline || 'none'};
    transition: ${({$transition}) => $transition || '.8s'};
    cursor: ${({$cursor}) => $cursor || 'pointer'};

    
    &::placeholder{
        text-align: ${({$textAlignPlaceholder}) => $textAlignPlaceholder};
        font-size: ${($fontSizePlaceholder) => $fontSizePlaceholder};
        color: ${({$colorPlaceholder}) => $colorPlaceholder};
    }

    &:hover{
        border-color: ${({$borderColorHover})=> $borderColorHover};
        color: ${({$colorHover}) => $colorHover};
    }
`;

