import * as Style from '../Desktop/HeaderDesktop.style';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

// ICONS
import { FaRegUserCircle } from 'react-icons/fa';

// LOGO
import Logo from '../../../assets/img/logo/logo.svg';

// FLAGS
import Brasil from '../../../assets/img/Flags/flagBrasil.svg'
import Eua from '../../../assets/img/Flags/flagEua.svg'
import Espanha from '../../../assets/img/Flags/flagEspanha.svg'

export default function HeaderDesktop() {
    const options = [
        { value: 'pt', label: 'Pt-br', icon: Brasil },
        { value: 'en', label: 'En', icon: Eua },
        { value: 'es', label: 'Es', icon: Espanha }
    ]

    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState(options[0]);

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

            {/* NAV */}
            <Style.Nav>
                <nav>
                    <ul>
                        <Style.Li>
                            <FaRegUserCircle size={20} color='#333' />
                            <Style.A href="#">{t('header.login')}</Style.A>
                        </Style.Li>
                    </ul>
                </nav>
            </Style.Nav>
        </Style.Div>
    )
}