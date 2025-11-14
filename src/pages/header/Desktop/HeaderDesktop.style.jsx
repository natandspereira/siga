import styled from "styled-components";

export const Div = styled.div`
    width: 100%;
    height: 80px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Logo = styled.div`
    margin: 0 40px;
     width: 160px;
`
export const Nav = styled.div`
    margin: 0 20px;
`

export const Li = styled.li`
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 5px;
` 
export const A = styled.a`
    text-decoration: none;
    color: #333;
    width: 160px;
    display: flex;
    align-items: center;
`

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

export const DivBtnModal = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    transform: translateY(-80%);

    & #btnCloseModal{
        cursor: pointer;
    }
`