import * as Style from './BannerDesktop.style';
import Banner from '../../../assets/img/banner/banner.svg';
import BannerMobile from '../../../assets/img/banner/bannerMobile.svg';
import Button from '../../../components/Button/Button';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from "react-responsive";

export default function BannerDesktop() {
    const isMobile = useMediaQuery({ maxWidth: 1024 });
    const isDesktop = useMediaQuery({ minWidth: 1025 });

    const { t } = useTranslation();
    return (
        <Style.Banner>
            <Style.Div>
                <p>{t("banner.p")}</p>
                <Button
                    txt={t("banner.btn")}
                    width={'200px'}
                    height={'40px'}
                    fontSize={'.7rem'}
                    color={'#fff'}
                    border={'2px solid #fff'}
                    backgroundColor={'#333'}
                    borderColorHover={'#0D263B'}
                />
            </Style.Div>
            {isMobile && <Style.Img src={BannerMobile} alt="Banner Mobile" />}
            {isDesktop && <Style.Img src={Banner} alt="Banner Desktop" />}

        </Style.Banner>
    )
}