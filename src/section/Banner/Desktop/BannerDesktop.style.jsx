import styled from 'styled-components';

export const Banner = styled.div`
     background-color: #333;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    
    & p{
        width: 500px;
        margin: 0 20px;
        color: #fff;
        font-size: 1.2rem;
        line-height: 2rem;
        text-align: center;
        text-shadow: rgba(0, 0, 0, .1) 2px 2px 4px;
    }
`

export const Img = styled.img`
    @media (min-width: 768px) and (max-width: 1024px) {
        
    }
`