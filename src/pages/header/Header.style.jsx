import '../../assets/css/variables.css';
import styled from 'styled-components';

export const DivHeader = styled.div`
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    & img{
        width: 110px;
        margin: 0 5px;
    }

    & #menuHeader{
        font-size: 30px;
        margin: 0 5px;
        color: var(--cor1);
        cursor: pointer;
    }
`
export const Menu = styled.nav`
    display: ${({ open }) => (open ? 'block' : 'none')};
    position: absolute;
    top: 60px;
    right: 0;
    background: #fff;
    padding: 10px;
    z-index: 1000;
    width: 170px;
    height: 100px;
    border-radius: 20px 0 0 20px;
    cursor: pointer;
    
    & ul{
        list-style-type: none;
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        color: #333;

        & li{
            display: flex;
            align-items: center;
            gap: 5px;
            font-size: .8rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);

            & #iconUser{
                font-size: 1rem;
            }
        }
    }
`
