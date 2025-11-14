import * as Style from './HeaderMobile.style';
import Select from 'react-select';
import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Modal from '../../../components/Modal/Modal';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';

// ICONS
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';

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
    const toggleMenu = () => { setOpenMenu(!openMenu) };

    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {

            if (openMenu && menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openMenu]);

    // Language
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(options[0])

    const handleLanguage = (selectedOption) => {
        setLanguage(selectedOption);
        i18n.changeLanguage(selectedOption.value);
    }

    // MODAL
    const [isOpenModal, setIsOpenModal] = useState(false);

    const OpenModal = () => { setIsOpenModal(true) };

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
            <Style.Menu ref={menuRef}>
                <AiOutlineMenu
                    size={35}
                    color='#333'
                    onClick={toggleMenu}
                />
                {openMenu && (
                    <Style.MenuBody>
                        <label onClick={OpenModal}>
                            <FaRegUserCircle />
                            <p>{t('header.login')}</p>
                        </label>
                        <p>{t('header.logout')}</p>
                    </Style.MenuBody>
                )}
            </Style.Menu>

            {/* MODAL */}
            <Modal
                isOpen={isOpenModal}
                onClose={() => { setIsOpenModal(false) }}
                borderBody={'2px solid #333'}
                widthBody={'300px'}
                heightBody={'300px'}
                flexDirectionBody={'column'}
                gapBody={'10px'}
            >

                <Style.DivbtnModal>
                    <AiOutlineCloseCircle
                        size={32}
                        color='#333'
                        id='btnCloseModal'
                        onClick={() => { setIsOpenModal(false) }}
                    />
                </Style.DivbtnModal>

                <img src={Logo} alt="Logo" />

                <Input
                    txtPlaceholder={'email'}
                    colorPlaceholder={'#fff'}
                    backgroundColor={'#333'}
                    color={'#fff'}
                    width={'200px'}
                    height={'30px'}
                    type={'text'}
                    fontSize={'1rem'}
                    borderRadius={'5px'}
                />
                <Input
                    txtPlaceholder={'senha'}
                    colorPlaceholder={'#fff'}
                    backgroundColor={'#333'}
                    color={'#fff'}
                    width={'200px'}
                    height={'30px'}
                    type={'password'}
                    fontSize={'1rem'}
                    borderRadius={'5px'}
                />
                <Button
                    txt={'Login'}
                    fontSize={'1rem'}
                    width={'200px'}
                    height={'30px'}
                    backgroundColor={'#333'}
                    color={'#fff'}
                    borderRadius={'20px'}
                />
            </Modal>
        </Style.Div>
    )
}