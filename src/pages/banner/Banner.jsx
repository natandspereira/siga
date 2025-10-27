
import imgBanner from '../../assets/img/banner/bannerMobile.svg';
import * as Style from './Banner.style';
import Button from '../../components/Button/Button';
import { useTranslation } from 'react-i18next';

export default function Banner() {
    const { t } = useTranslation();

    return (
        <>
            <Style.DivBanner>
                <div id="txtBanner">
                    <p>{t("banner.txt")}</p>
                     <Button 
                        txt={t("banner.btn")} 
                        colorBackground={'#333'}
                        colorFont={'#fff'}
                        border={'2px solid white'}
                        padding={'5px'}
                        borderRadius={'10px'}
                        fontSize={'.8rem'}
                        textShadow={''} //default
                        borderColorHover={'#0D263B'}
                        cursor={''} //default
                     />
                </div> 
                <img src={imgBanner} alt="Imagem Banner" />
            </Style.DivBanner>
        </>
    )
}

