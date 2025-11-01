import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

// LOGO
export const Logo = styled.div`
    margin: 0 20px;
`

// SELECT
export const ImgSelect = styled.img`
    width: 20px;
`

export const DivSelect = styled.div`
    display: flex;
    align-items: center;
    gap: 2px;
    width: 70px;
    cursor: pointer;
`

// MENU
export const Menu = styled.div`
     margin: 0 20px;
`
export const MenuBody = styled.div`
    position: absolute;
    top: 85px;
    right: 2px;
    width: 200px;
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 2px solid #333;
    border-radius: 10px;
    font-size: .8rem;
    background-color: #fff;
    & label{
        display: flex;
        align-items: center;
        gap: 2px;
    }
`