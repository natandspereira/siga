import * as Style from './HeaderMobile.style';
import Select from 'react-select';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

// ICONS
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

// LOGO
import Logo from '../../../assets/img/logo/logo.svg';

// FLAGS
import Brasil from '../../../assets/img/Flags/flagBrasil.svg'
import Eua from '../../../assets/img/Flags/flagEua.svg'
import Espanha from '../../../assets/img/Flags/flagEspanha.svg'


export default function HeaderMobile() {
    // SELECT
    const options = [
        { value: 'pt', label: 'Pt-br', icon: Brasil },
        { value: 'en', label: 'En', icon: Eua },
        { value: 'es', label: 'Es', icon: Espanha }
    ]

    // MENU
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () => {setOpenMenu(!openMenu)};

    // Language
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState(options[0])

    const handleLanguage = (selectedOption) => {
        setLanguage(selectedOption);
        i18n.changeLanguage(selectedOption.value);
    }
    return (
        <Style.Div>
            {/* LOGO */}
            <Style.Logo>
                <img src={Logo} alt="Logo" />
            </Style.Logo>

            {/* SELECT */}
            <Select
                options={options}
                defaultValue={options[0]}
                formatOptionLabel={(option) => (
                    <Style.DivSelect>
                        <Style.ImgSelect src={option.icon} alt={option.label} />
                        <span>{option.label}</span>
                    </Style.DivSelect>
                )}
                onChange={handleLanguage}
                value={language}
            />

            {/* MENU */}
            <Style.Menu>
                <AiOutlineMenu 
                size={35} 
                color='#333'
                onClick={toggleMenu}
                />
                {openMenu && (
                    <Style.MenuBody>
                    <label>
                        <FaRegUserCircle />
                        <p>{t('header.login')}</p>
                    </label>
                    <p>{t('header.logout')}</p>
                </Style.MenuBody>
                )}
            </Style.Menu>
        </Style.Div>
    )
}