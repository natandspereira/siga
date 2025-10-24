import { useState } from 'react';

// Styled Component
import * as Style from './Header.style';

// Logo
import Logo from '../../assets/img/logo/logo.svg';

// Icon
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <>
            <Style.DivHeader>
                <img src={Logo} alt="Logo" />
                <AiOutlineMenu id='menuHeader' onClick={toggleMenu} />
            </Style.DivHeader>
            <Style.Menu open={openMenu}>
                <ul>
                    <li>
                        <FaRegUserCircle id='iconUser' />
                        Acesse sua conta
                    </li>
                    <li>PT-BR</li>
                    <li>Sair</li>
                </ul>
            </Style.Menu>
        </>
    )
}