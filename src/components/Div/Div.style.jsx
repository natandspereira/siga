import styled from "styled-components";



export const Div = styled.div`
    width: ${({$width})=> $width || 'auto'};
    height: ${({$height})=> $height || 'auto'};
    padding: ${({$padding})=> $padding || 'auto'};
    border: ${({$border})=> $border || 'none'};
    border-radius:${({$borderRadius})=> $borderRadius || '10px'};
    border-color:${({$borderColor})=> $borderColor || 'grey'};
    background-color:${({$backgroundColor})=> $backgroundColor || '#fff'};
    box-shadow: ${({$boxShadow}) => $boxShadow || 'rgba(0, 0, 0, 0.35) 0px 5px 15px;'};
    text-shadow: ${({$textShadow}) => $textShadow || 'rgba(0,0,0,0.1) 2px 2px 4px'};
    text-transform: ${({$textTransform}) => $textTransform || '.8s'};
    text-align: ${({$textAlign}) => $textAlign || 'center'};
    color: ${({$color}) => $color || '#fff'};
    font-size: ${({$fontSize}) => $fontSize || '.8rem'};
    font-weight: ${({$fontWeight}) => $fontWeight || '100'};
    
    display: ${({$display}) => $display || 'center'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'center'};
    transition: ${({$transition}) => $transition || 'all .8s ease'};
    cursor: ${({$cursor}) => $cursor || 'pointer'};
    
    &::placeholder{
        text-align: ${({$textAlignPlaceholder}) => $textAlignPlaceholder || 'center'};
        font-size: ${($fontSizePlaceholder) => $fontSizePlaceholder || '.8rem'};
        color: ${({$colorPlaceholder}) => $colorPlaceholder || '#000'};
    }

    &:hover{
        border-color: ${({$borderColorHover})=> $borderColorHover};
        color: ${({$colorHover}) => $colorHover};
    }
`;