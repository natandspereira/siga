import '../../assets/css/default.css';
import styled from 'styled-components';

export const DivBanner = styled.div`
    width: 100%;
    height: 200px;
    background-color: var(--cor1);
    display: flex;
    align-items: center;
    justify-content: space-between;

    & #txtBanner{
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 10px;

        & p{
            font-size: .8rem;
            text-align:center;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
            margin: 0 5px;
            line-height: 1.2rem;
        }
    }
`