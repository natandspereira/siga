import * as Style from './Gestao.style';

import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';

import imgGestao from '../../assets/img/gestao/imgGestao.svg';
import { useTranslation } from 'react-i18next';

export default function Gestao() {
    const [ t ] = useTranslation();

    return (
        <>
            <Section
                width={'100%'}
                height={'330px'}
                justifyContent={'space-between'}
            >
                <Style.Container>
                    <Style.P1>{t("gestao.p1")}</Style.P1>

                     <Style.Div>
                        <Style.Img src={imgGestao} alt="" />
                    </Style.Div>
                    
                    <Style.Div>
                        <Style.P2>{t("gestao.p2")}</Style.P2>
                        <Button
                            txt={t("gestao.btn")}
                            colorBackground={'#333'}
                            colorFont={'#fff'}
                            fontSize={'.8rem'}
                            border={'none'}
                            padding={'10px'}
                            borderRadius={'10px'}
                            margin={'10px'}
                        />
                    </Style.Div>
                </Style.Container>
            </Section>
        </>
    )
}