import Section from "../../components/Section/Section";
import Div from "../../components/Div/Div";

import * as Style from './Escolher.style'

import iconCentr from '../../assets/img/Icones/iconCentr.svg';
import iconColab from '../../assets/img/Icones/iconColab.svg';
import iconProd from '../../assets/img/Icones/iconProd.svg';
import iconRelat from '../../assets/img/Icones/iconRelat.svg';
import iconSeg from '../../assets/img/Icones/iconSeg.svg';

import { useTranslation } from 'react-i18next';

export default function Escolher() {
    const [ t ] = useTranslation();

    return (
        <>
            <Section
                flexDirection='column'
                width={'100%'}
                height={'600px'}
                gap={'10px'}
            >
                <Style.H1>{t("escolher.h1")}</Style.H1>
                <Div
                    backgroundColor={'#333'}
                    width={'200px'}
                    height={'100px'}
                    borderRadius={'10px'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'2px'}
                    gap={'5px'}
                >
                    <Style.Img src={iconSeg} alt="Icone Segurança" />
                    <Style.H4>{t("escolher.sectionSeguranca.h4")}</Style.H4>
                    <Style.P>{t("escolher.sectionSeguranca.p")}</Style.P>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'200px'}
                    height={'100px'}
                    borderRadius={'10px'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'2px'}
                    gap={'5px'}
                >
                    <Style.Img src={iconCentr} alt="Icone Segurança" />
                    <Style.H4>{t("escolher.sectionCentralizacao.h4")}</Style.H4>
                    <Style.P>{t("escolher.sectionCentralizacao.p")}</Style.P>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'200px'}
                    height={'100px'}
                    borderRadius={'10px'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'2px'}
                    gap={'5px'}
                >
                    <Style.Img src={iconProd} alt="Icone Segurança" />
                    <Style.H4>{t("escolher.sectionProdutividade.h4")}</Style.H4>
                    <Style.P>{t("escolher.sectionProdutividade.p")}</Style.P>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'200px'}
                    height={'100px'}
                    borderRadius={'10px'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'2px'}
                    gap={'5px'}
                >
                    <Style.Img src={iconColab} alt="Icone Segurança" />
                    <Style.H4>{t("escolher.sectionColaboracao.h4")}</Style.H4>
                    <Style.P>{t("escolher.sectionColaboracao.p")}</Style.P>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'200px'}
                    height={'100px'}
                    borderRadius={'10px'}
                    flexDirection={'column'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    padding={'2px'}
                    gap={'5px'}
                >
                    <Style.Img src={iconRelat} alt="Icone Segurança" />
                    <Style.H4>{t("escolher.sectionRelatorios.h4")}</Style.H4>
                    <Style.P>{t("escolher.sectionRelatorios.p")}</Style.P>
                </Div>
            </Section>
        </>
    )
}