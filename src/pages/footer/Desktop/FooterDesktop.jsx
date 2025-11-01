import * as Style from './FooterDesktop.style';
import Logo from '../../../assets/img/logo/logo.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function FooterDesktop(){
    const {t} = useTranslation();
    
    return(
        <Style.Div>
            <Style.Img src={Logo} alt="Logo" />
            <Style.P>{t('footer.p')}</Style.P>
            <Style.Sociais>
                <FaFacebookSquare size={30} color='#fff'/>
                <FaInstagramSquare size={30} color='#fff'/>
                <FaTwitterSquare size={30} color='#fff'/>
            </Style.Sociais>
        </Style.Div>
    )
}