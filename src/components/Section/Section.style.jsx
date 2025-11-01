import styled from 'styled-components';



export const Section = styled.section`
    width: ${({$width})=> $width || 'auto'};
    height: ${({$height})=> $height || 'auto'};
    padding: ${({$padding})=> $padding || 'auto'};
    border: ${({$border})=> $border || 'none'};
    border-radius:${({$borderRadius})=> $borderRadius || '10px'};
    border-color:${({$borderColor})=> $borderColor || 'grey'};
    background-color:${({$backgroundColor})=> $backgroundColor || '#fff'};
    text-shadow: ${({$textShadow}) => $textShadow || 'rgba(0,0,0,0.1) 2px 2px 4px'};
    text-transform: ${({$textTransform}) => $textTransform || 'capitalize'};
    text-align: ${({$textAlign}) => $textAlign || 'center'};
    color: ${({$color}) => $color || '#fff'};
    font-size: ${({$fontSize}) => $fontSize || '.8rem'};
    font-weight: ${({$fontWeight}) => $fontWeight || '100'};
    line-height: ${({$lineHeight}) => $lineHeight || '2rem'};
    display: ${({$display}) => $display || 'flex'};
    align-items: ${({$alignItems}) => $alignItems || 'center'};
    justify-content: ${({$justifyContent}) => $justifyContent || 'center'};
    flex-direction: ${({$flexDirection}) => $flexDirection || 'row'};
    margin: ${({$margin}) => $margin || 'auto'};
`;