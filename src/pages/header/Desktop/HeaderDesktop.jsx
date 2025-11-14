import * as Style from '../Desktop/HeaderDesktop.style';
import Select from 'react-select';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Modal  from '../../../components/Modal/Modal';
import Input from '../../../components/Input/Input';
import Button from '../../../components/Button/Button';
import LogoModal from '../../../assets/img/logo/logo.svg';

// ICONS
import { FaRegUserCircle } from 'react-icons/fa';
import { AiOutlineCloseCircle } from 'react-icons/ai';

// LOGO
import Logo from '../../../assets/img/logo/logo.svg';

// FLAGS
import Brasil from '../../../assets/img/Flags/flagBrasil.svg'
import Eua from '../../../assets/img/Flags/flagEua.svg'
import Espanha from '../../../assets/img/Flags/flagEspanha.svg'

export default function HeaderDesktop() {
    // SELECT
    const options = [
        { value: 'pt', label: 'Pt-br', icon: Brasil },
        { value: 'en', label: 'En', icon: Eua },
        { value: 'es', label: 'Es', icon: Espanha }
    ]
    
    // LANGUAGE
    const { t, i18n } = useTranslation();

    const [language, setLanguage] = useState(options[0]);

    const handleLanguage = (selectedOption) => {
        setLanguage(selectedOption);
        i18n.changeLanguage(selectedOption.value);
    }

    // MODAL
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleModal = () => {
        setIsOpenModal(true);
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
                    <ul onClick={handleModal}>
                        <Style.Li>
                            <FaRegUserCircle size={20} color='#333' />
                            <Style.A href="#">{t('header.login')}</Style.A>
                        </Style.Li>
                    </ul>
                </nav>
            </Style.Nav>

            {/* MODAL */}
            <Modal
                borderBody={'2px solid #333'}
                widthBody={'300px'}
                heightBody={'300px'}
                flexDirectionBody={'column'}
                gapBody={'10px'}
                onClose={()=>{setIsOpenModal(false)}}
                isOpen={isOpenModal}
            >
                <Style.DivBtnModal>
                    <AiOutlineCloseCircle 
                    size={32} 
                    color='#333' 
                    onClick={()=>{setIsOpenModal(false)}}
                    id='btnCloseModal'/>
                </Style.DivBtnModal>
                <img src={LogoModal} alt="Logo" />
                <Input 
                    txtPlaceholder={'email'}
                    colorPlaceholder={'#fff'}
                    width={'250px'}
                    height={'40px'}
                    backgroundColor={'#333'}
                    type={'text'}
                    fontSize={'1rem'}
                    borderRadius={'5px'}
                />
                <Input 
                    txtPlaceholder={'senha'}
                    colorPlaceholder={'#fff'}
                    width={'250px'}
                    height={'40px'}
                    backgroundColor={'#333'}
                    type={'password'}
                    fontSize={'1rem'}
                    borderRadius={'5px'}
                    color={'#fff'}
                />
                <Button 
                    txt={'Login'}
                    width={'200px'}
                    height={'40px'}
                    backgroundColor={'#333'}
                    color={'#fff'}
                    fontSize={'1rem'}
                />
            </Modal>
        </Style.Div>
    )
}