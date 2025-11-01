import * as Style from './FooterMobile.style';
import Logo from '../../../assets/img/logo/logo.svg';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

export default function FooterMobile(){
    const {t} = useTranslation();
    
    return(
        <Style.Div>
            <Style.Img src={Logo} alt="Logo" />
            <Style.P>{t('footer.p')}</Style.P>
            <Style.Sociais>
                <FaFacebookSquare size={20} color='#fff'/>
                <FaInstagramSquare size={20} color='#fff'/>
                <FaTwitterSquare size={20} color='#fff'/>
            </Style.Sociais>
        </Style.Div>
    )
}