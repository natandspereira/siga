
import imgBanner from '../../assets/img/banner/bannerMobile.svg';
import * as Style from './Banner.style';
import Button from '../../components/Button/Button';

export default function Banner() {
    return (
        <>
            <Style.DivBanner>
                <div id="txtBanner">
                    <p>Tenha o controle total das suas atividades em uma plataforma simples, moderna e eficiente.</p>
                     <Button 
                        txt="Experimente o SIGA" 
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

