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
    color: ${({$color}) => $color || '#000'};
    font-size: ${({$fontSize}) => $fontSize || '.8rem'};
    font-weight: ${({$fontWeight}) => $fontWeight || '500'};
    display: ${({$display}) => $display || 'flex'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'center'};
    transition: ${({$transition}) => $transition || 'all .8s ease'};
    cursor: ${({$cursor}) => $cursor || 'pointer'};
    gap: ${({$gap}) => $gap || '2px'};
    flex-direction: ${({$flexDirection}) => $flexDirection || 'row'};
    margin: ${({$margin}) => $margin || '0'};
    grid-template-columns: ${({$gridTemplateColumns}) => $gridTemplateColumns || 'auto'};
    
    &:hover{
        border-color: ${({$borderColorHover})=> $borderColorHover};
        color: ${({$colorHover}) => $colorHover};
    }
`;