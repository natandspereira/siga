import * as Style from './Gestao.style';

import Section from '../../components/Section/Section';
import Button from '../../components/Button/Button';

import imgGestao from '../../assets/img/gestao/imgGestao.svg';

export default function Gestao() {
    return (
        <>
            <Section
                width={'100%'}
                height={'330px'}
                justifyContent={'space-between'}
            >
                <Style.Container>
                    <Style.P1>Com o SIGA, sua gestão fica mais simples, ágil e eficiente.</Style.P1>

                     <Style.Div>
                        <Style.Img src={imgGestao} alt="" />
                    </Style.Div>
                    
                    <Style.Div>
                        <Style.P2>Não perca tempo com planilhas e processo manuais, leve sua organização para o próximo nível.</Style.P2>
                        <Button
                            txt={'Comece agora com o SIGA'}
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