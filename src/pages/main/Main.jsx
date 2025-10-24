import * as Style from './Main.style';
import Escolher from '../../section/escolher/Escolher';
import Atividades from '../../section/atividades/Atividades';
import Gestao from '../../section/gestao/Gestao';
import Footer from '../footer/Footer';

export default function Main(){
    return(
        <>
        <Escolher />
        <Atividades />
        <Gestao />
        <Footer />
        </>
    )
}