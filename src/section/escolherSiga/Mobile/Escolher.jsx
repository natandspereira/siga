import * as Style from './Escolher.style';
import Div from '../../../components/Div/Div';
import { useTranslation } from 'react-i18next';
// ICONS
import iconCentr from '../../../assets/img/Icones/iconCentr.svg';
import iconCheck from '../../../assets/img/Icones/iconCheck.svg';
import iconColab from '../../../assets/img/Icones/iconColab.svg';
import iconProd from '../../../assets/img/Icones/iconProd.svg';
import iconRelat from '../../../assets/img/Icones/iconRelat.svg';
import iconSeg from '../../../assets/img/Icones/iconSeg.svg';

export default function Escolher() {
    const { t } = useTranslation();

    return (
        <Style.Container>
            <h2>{t('escolher.h2')}</h2>
            <Style.Div>
                <Div
                    backgroundColor={'#333'}
                    width={'320px'}
                    height={'110px'}
                    padding={'8px 0'}
                    flexDirection={'column'}
                    color={'#fff'}
                >
                    <img src={iconSeg} alt="Segurança" />
                    <h3>{t('escolher.seguranca.h3')}</h3>
                    <p>{t('escolher.seguranca.p')}</p>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'320px'}
                    height={'110px'}
                    padding={'8px 0'}
                    flexDirection={'column'}
                    color={'#fff'}
                >
                    <img src={iconCentr} alt="Centralização" />
                    <h3>{t('escolher.centralizacao.h3')}</h3>
                    <p>{t('escolher.centralizacao.p')}</p>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'320px'}
                    height={'110px'}
                    padding={'8px 0'}
                    flexDirection={'column'}
                    color={'#fff'}
                >
                    <img src={iconProd} alt="Produtividade" />
                    <h3>{t('escolher.produtividade.h3')}</h3>
                    <p>{t('escolher.produtividade.p')}</p>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'320px'}
                    height={'110px'}
                    padding={'8px 0'}
                    flexDirection={'column'}
                    color={'#fff'}
                >
                    <img src={iconColab} alt="Colaboração" />
                    <h3>{t('escolher.colaboracao.h3')}</h3>
                    <p>{t('escolher.colaboracao.p')}</p>
                </Div>
                <Div
                    backgroundColor={'#333'}
                    width={'320px'}
                    height={'110px'}
                    padding={'8px 0'}
                    flexDirection={'column'}
                    color={'#fff'}
                >
                    <img src={iconRelat} alt="Relatório" />
                    <h3>{t('escolher.relatorio.h3')}</h3>
                    <p>{t('escolher.relatorio.p')}</p>
                </Div>
            </Style.Div>

        </Style.Container>
    )
}