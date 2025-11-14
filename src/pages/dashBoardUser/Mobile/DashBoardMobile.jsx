import * as Style from './DashBoardMobile.style';
import { useState, useRef, useEffect } from 'react';
// LOGO
import Logo from '../../../assets/img/logo/logo.svg';

//COMPONENTS
import Div from '../../../components/Div/Div';
import { GlobalStyle } from '../../../components/DefaultStyle/Default.style';
import Input from '../../../components/Input/Input';

// ICONS
import { MdOutlineAddBox } from 'react-icons/md';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { BiEditAlt } from 'react-icons/bi';
import { FaCalendarAlt } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMenu } from "react-icons/io5";
import { BiLogOutCircle } from "react-icons/bi";

export default function DashBoardMobile() {
    const [openMenu, setOpenMenu] = useState(false);
    const menuRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenMenu(false);
            }
        }

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])

    return (
        <>
            <GlobalStyle />
            {/* HEADER */}
            <Div
                width={'100vw'}
                height={'50px'}
                borderRadius={'0'}
                gap={'0'}
                padding={'10px 0'}
                justifyContent={'space-between'}
            >
                <Style.Logo src={Logo} alt="Logo" />
                <Style.IconDiv>
                    <IoMenu
                        size={30}
                        onClick={(e) => { e.stopPropagation(); setOpenMenu(!openMenu) }}
                    />
                </Style.IconDiv>
            </Div>
            {/* SUB-HEADER */}
            <Div
                width={'100vw'}
                height={'40px'}
                borderRadius={'0'}
                margin={'2px 0'}
                gridTemplateColumns={'30% 20% 15% 20%'}
                display={'grid'}
            >
                <p>Minhas tarefas</p>
                <p>Prioridades</p>
                <p>Status</p>
                <p>Prazo</p>
                
            </Div>
            <Div
                width={'100vw'}
                height={'40px'}
                borderRadius={'0'}
                margin={'2px 0'}
                gridTemplateColumns={'30% 20% 15% 20%'}
                display={'grid'}
            >
                <p>Estudar ReactJS</p>
                <p>Alta</p>
                <p>Pendente</p>
                <p>04/11/25</p>   
            </Div>

            {/* MENU  */}
            {openMenu &&
                <Style.DivMenu>
                    <Style.DivBodyMenu ref={menuRef}>
                        <Style.LabelIcons>
                            <MdOutlineAddBox size={20} color='#05AB41' />
                            <p>Adicionar</p>
                        </Style.LabelIcons>
                        <Style.LabelIcons>
                            <MdOutlineDeleteForever size={20} color='#FD0A0A' />
                            <p>Remover</p>
                        </Style.LabelIcons>
                        <Style.LabelIcons>
                            <BiEditAlt size={20} color='#007BFF' />
                            <p>Editar</p>
                        </Style.LabelIcons>
                        <Style.LabelIcons>
                            <FaCalendarAlt size={20} color='#F59E0B' />
                            <p>Calendário</p>
                        </Style.LabelIcons>
                        <Style.LabelIcons>
                            <BiLogOutCircle size={20} />
                            <p>Sair</p>
                        </Style.LabelIcons>
                    </Style.DivBodyMenu>
                </Style.DivMenu>
            }
        </>
    )
}