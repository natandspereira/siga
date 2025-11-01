import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & h2{
        font-size: 1.8rem;
        color: #333;
        text-shadow: rgba(0, 0, 0, 0.1) 2px 2px 4px;
    }
`

export const Div = styled.div`
    display: flex;
    flex-direction: row;
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

    @media (min-width: 768px) and (max-width: 1024px) {
            flex-direction: column;
    }

    & div{
        @media (min-width: 768px) and (max-width: 1024px) {
            width: 100%;
            height: 100px;
        }
    }
`

