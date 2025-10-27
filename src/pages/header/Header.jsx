import { useState } from 'react';

// Styled Component
import * as Style from './Header.style';

// Logo
import Logo from '../../assets/img/logo/logo.svg';

// Icon
import { AiOutlineMenu } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';


import CustomSelect from '../../components/Select/Select';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);
    const [t, i18n] = useTranslation();

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const changeLanguage = (valueLanguage) => {
        const value = valueLanguage.value;
        i18n.changeLanguage(value);
    }

  
    return (
        <>
            <Style.DivHeader>
                <img src={Logo} alt="Logo" />
                <CustomSelect onChange={changeLanguage} />
                <AiOutlineMenu id='menuHeader' onClick={toggleMenu} />
            </Style.DivHeader>
            <Style.Menu open={openMenu}>
                 <ul>
                    <li>
                        <FaRegUserCircle id='iconUser' />
                        {t('header.login')}
                    </li>
                    <li>{t('header.logout')}</li>
                </ul>
            </Style.Menu>
        </>
    )
}