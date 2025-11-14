import styled from 'styled-components';



export const Button = styled.button`
    width: ${({$width})=> $width || 'auto'};
    height: ${({$height})=> $height || 'auto'};
    padding: ${({$padding})=> $padding || 'auto'};
    border: ${({$border})=> $border || 'none'};
    border-radius:${({$borderRadius})=> $borderRadius || '10px'};
    background-color:${({$backgroundColor})=> $backgroundColor || '#fff'};
    box-shadow: ${({$boxShadow}) => $boxShadow || 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'};
    text-shadow: ${({$textShadow}) => $textShadow || 'rgba(0, 0, 0, 0.1) 2px 2px 4px'};
    text-transform: ${({$textTransform}) => $textTransform || 'capitalize'};
    text-align: ${({$textAlign}) => $textAlign || 'center'};
    color: ${({$color}) => $color || 'black'};
    font-size: ${({$fontSize}) => $fontSize || '.8rem'};
    font-weight: ${({$fontWeight}) => $fontWeight || '100'};
    transition: ${({$transition}) => $transition || 'all .8s ease-out'};
    cursor: ${({$cursor}) => $cursor || 'pointer'};
    margin: ${({$margin}) => $margin || '5px 0'};

     &::placeholder{
        text-align: ${({$textAlignPlaceholder}) => $textAlignPlaceholder};
        font-size: ${($fontSizePlaceholder) => $fontSizePlaceholder};
        color: ${({$colorPlaceholder}) => $colorPlaceholder};
    }

    &:hover{
        border-color: ${({$borderColorHover})=> $borderColorHover};
        color: ${({$colorHover}) => $colorHover};
    }
`