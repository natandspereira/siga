import * as Style from './Atividades.style';

import Section from '../../components/Section/Section';

import iconCheck from '../../assets/img/Icones/iconCheck.svg';

import { useTranslation } from 'react-i18next';

export default function Atividades() {
    const [ t ] = useTranslation();

    return (
        <>
            <Section
                backgroundColor={'#333'}
                flexDirection={'column'}
                padding={'5px'}
                width={'100%'}
                height={'200px'}
                gap={'10px'}
            >
                <Style.H1>{t("atividade.h1")}</Style.H1>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>{t("atividade.p1")}</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>{t("atividade.p2")}</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>{t("atividade.p3")}</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>{t("atividade.p4")}</Style.P>
                </Style.Label>
            </Section>
        </>
    )
}