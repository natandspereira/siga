import styled from "styled-components";

export const Banner = styled.div`
    background-color: #333;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Div = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    & p{
        font-size: .8rem;
        margin: 0 20px;
        width: 100%;
        color: #fff;
        line-height: 1.1rem;
    }
`