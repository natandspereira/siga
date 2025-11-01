import * as Style from './AtividadesMobile.style';
import Section from '../../../components/Section/Section';
import iconCheck from '../../../assets/img/Icones/iconCheck.svg';
import { useTranslation } from 'react-i18next';

export default function AtividadesMobile(){
    const {t} = useTranslation();

    return(
        <>
            <Section 
                width={'100%'}
                height={'250px'}
                borderRadius={'0'}
                backgroundColor={'#333'}
                margin={'20px 0 0 0'}
                flexDirection={'column'}
                lineHeight={'1rem'}
                textTransform={'none'}
            >
                <Style.H2>{t('atividades.h2')}</Style.H2>
                <div
                    width={'100%'}
                >
                    <Style.Label>
                        <Style.Img src={iconCheck} alt="Icone Check" />
                        <p>{t('atividades.p1')}</p>
                    </Style.Label>
                    <Style.Label>
                        <Style.Img src={iconCheck} alt="Icone Check" />
                        <p>{t('atividades.p2')}</p>
                    </Style.Label>
                    <Style.Label>
                        <Style.Img src={iconCheck} alt="Icone Check" />
                        <p>{t('atividades.p3')}</p>
                    </Style.Label>
                    <Style.Label>
                        <Style.Img src={iconCheck} alt="Icone Check" />
                        <p>{t('atividades.p4')}</p>
                    </Style.Label>
                </div>
            </Section>
        </>
    )
}