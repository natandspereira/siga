import * as Style from './Footer.style';

import Section from '../../components/Section/Section';

import Logo from '../../assets/img/logo/logo.svg';

import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { AiOutlineYoutube } from 'react-icons/ai';

export default function Footer(){
    return(
        <>
        <Section
            backgroundColor={'#333'}
            width={'100%'}
            height={'100px'}
        >
            <Style.Container>
               <Style.Logo src={Logo} alt="Logo" />
               <Style.P>SIGA. Todos os direitos reservados.</Style.P>
               <FaFacebookF size={20} color={'#fff'}/>
               <FaInstagram size={20} color={'#fff'}/>
               <AiOutlineYoutube size={20} color={'#fff'}/>
            </Style.Container>
        </Section>
        </>
    )
}