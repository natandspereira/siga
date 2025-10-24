import Section from "../../components/Section/Section";
import Div from "../../components/Div/Div";

import * as Style from './Escolher.style'

import iconCentr from '../../assets/img/Icones/iconCentr.svg';
import iconColab from '../../assets/img/Icones/iconColab.svg';
import iconProd from '../../assets/img/Icones/iconProd.svg';
import iconRelat from '../../assets/img/Icones/iconRelat.svg';
import iconSeg from '../../assets/img/Icones/iconSeg.svg';


export default function Escolher() {
    return (
        <>
            <Section
                flexDirection='column'
                width={'100%'}
                height={'600px'}
                gap={'10px'}
            >
                <Style.H1>Por que escolher o SIGA?</Style.H1>
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
                    <Style.H4>Segurança</Style.H4>
                    <Style.P>Acesso controlado e dados protegidos.</Style.P>
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
                    <Style.H4>Centralização</Style.H4>
                    <Style.P>Todas as suas atividades em um só lugar.</Style.P>
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
                    <Style.H4>Produtividade</Style.H4>
                    <Style.P>Acompanhe prazos, status e prioridades em tempo real.</Style.P>
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
                    <Style.H4>Colaboração</Style.H4>
                    <Style.P>Delegue tarefas e envolva sua equipe com clareza.</Style.P>
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
                    <Style.H4>Relatórios</Style.H4>
                    <Style.P>Visualize indicadores e melhore a tomada de decisão.</Style.P>
                </Div>
            </Section>
        </>
    )
}