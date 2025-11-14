import styled from "styled-components";

export const Logo = styled.img`
    margin: 0 20px;
`

export const IconDiv = styled.div`
    margin: 0 20px;
`
export const DivMenu = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    position: fixed;
    top: 70px;
    z-index: 99;
    pointer-events: auto;
`
export const DivBodyMenu = styled.div`
    width: 100px;
    height: 300px;
    background-color: #333;
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-size: .8rem;
    border-radius: 30px 0 0 30px;
    color: #fff;
    padding: 5px;
`

export const LabelIcons = styled.label`
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
`

