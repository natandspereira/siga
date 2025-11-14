import styled from 'styled-components';

export const Img = styled.img`
    width: 120px;
    margin: 0 20px;
     filter: brightness(0) invert(1);
`;

export const DivIconUser = styled.div`
    margin: 0 20px;
`

export const LabelIcons = styled.label`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const LabelInput = styled.label`
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 5px;
`

export const DivMain = styled.div`
     width: 99vw;
     display: flex;
     flex-direction: column; 
     gap: 10px;              
     color: #000;
`

export const LabelMain = styled.label`
    display: flex;
    align-items: center;
    gap: 10px;  
`

export const DivTarefa = styled.div`
    display: grid;
    grid-template-columns: 18% 10% 8% 10% 20% 20%;
    gap: 20px; 
    padding: 10px; 
    border: 1px solid #ccc;
    border-radius: '5px';
`
export const DivError = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #ff4d4d;
    color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
    z-index: 999;
`
export const LogoModal = styled.img`
    width: 120px;
`