import styled from "styled-components";

export const Container = styled.div`
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
` 

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const LogoForm = styled.img`
    width: 150px;
`
export const DivLogoForm = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
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
export const DivSucesso = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #05bb23;
    color: #fff;
    padding: 20px 40px;
    border-radius: 10px;
    text-align: center;
    font-weight: 600;
    z-index: 999;
`