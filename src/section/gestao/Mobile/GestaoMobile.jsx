import * as Style from './GestaoMobile.style';
import Section from '../../../components/Section/Section';
import Gestao from '../../../assets/img/gestao/imgGestao.svg';
import Button from '../../../components/Button/Button';
import { useTranslation } from 'react-i18next';

export default function GestaoMobile(){
    const {t} = useTranslation();

    return(
        <Section
            width={'100%'}
        >
            <Style.Div>
                <Style.H2>{t('gestao.h2')}</Style.H2>
                <img src={Gestao} alt="Gestão" />
                <Style.P>{t('gestao.p')}</Style.P>
                <Button 
                    txt={t('gestao.btn')}
                    backgroundColor={'#333'}
                    color={'#fff'}
                    height={'35px'}
                    borderRadius={'15px'}
                    border={'2px solid #333'}
                    borderColorHover={'#0D263B'}
                    margin={'0 0 10px 0'}
                />
            </Style.Div>
        </Section>
    )
}