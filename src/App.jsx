import {GlobalStyle} from './components/DefaultStyle/Default.style';
import { useMediaQuery } from 'react-responsive';

// HEADER
import HeaderDesktop from './pages/header/Desktop/HeaderDesktop';
import HeaderMobile from './pages/header/Mobile/HeaderMobile';

// BANNER
import BannerMobile from './section/Banner/Mobile/BannerMobile';
import BannerDesktop from './section/Banner/Desktop/BannerDesktop';

import Escolher from './section/escolherSiga/Mobile/Escolher';
import EscolherDesktop from './section/escolherSiga/Desktop/EscolherDesktop';

import AtividadesMobile from './section/atividades/Mobile/AtividadesMobile';
import AtividadesDesktop from './section/atividades/Desktop/AtividadesDesktop';

import GestaoMobile from './section/gestao/Mobile/GestaoMobile';
import GestaoDesktop from './section/gestao/Desktop/GestaoDesktop';

import FooterMobile from './pages/footer/Mobile/FooterMobile';
import FooterDesktop from './pages/footer/Desktop/FooterDesktop';

function App() {
  const isMobile = useMediaQuery({maxWidth: 767});

  return (
    <>
       <GlobalStyle />
       {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
       {isMobile ? <BannerMobile /> : <BannerDesktop />}
       {isMobile ? <Escolher />  : <EscolherDesktop />}
       {isMobile ? <AtividadesMobile />  : <AtividadesDesktop />}
       {isMobile ? <GestaoMobile />  : <GestaoDesktop />}
       {isMobile ?  <FooterMobile />  :  <FooterDesktop />}
    </>
  )
}

export default App
