import * as Style from './BannerMobile.style';
import Banner from '../../../assets/img/banner/bannerMobile.svg';
import Button from '../../../components/Button/Button';
import { useTranslation } from 'react-i18next';

export default function BannerMobile(){
    const {t} = useTranslation();
    return(
        <Style.Banner>
            <Style.Div>
                <p>{t("banner.p")}</p>
                <Button 
                    txt={t("banner.btn")}
                    width={'120px'}
                    height={'40px'}
                    fontSize={'.7rem'}
                    color={'#fff'}
                    border={'2px solid #fff'}
                    backgroundColor={'#333'}
                    borderColorHover={'#0D263B'}
                />
            </Style.Div>
            <img src={Banner} alt="Banner" />
        </Style.Banner>
    )
}