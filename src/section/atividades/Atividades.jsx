import * as Style from './Atividades.style';

import Section from '../../components/Section/Section';

import iconCheck from '../../assets/img/Icones/iconCheck.svg';

export default function Atividades() {
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
                <Style.H1>Gerencie suas atividades com eficiência</Style.H1>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>Cadastro e acompanhamento de tarefas.</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>Dashboard intuitivo com visão geral do progresso.</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>Notificações de equipes e permissões de acesso.</Style.P>
                </Style.Label>

                <Style.Label>
                    <Style.Img src={iconCheck} alt="Icone Check" />
                    <Style.P>Relatórios detalhados de desempenho e produtividade.</Style.P>
                </Style.Label>
            </Section>
        </>
    )
}