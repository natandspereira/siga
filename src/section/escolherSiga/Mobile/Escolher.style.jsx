import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h2{
        font-size: 1rem;
        color: #333;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & img{
        width: 30px;
        margin-top: 5px ;
    }

    & h3{
        font-weight: bold;
    }

    & p{
        font-size: .8rem;
    }
`

