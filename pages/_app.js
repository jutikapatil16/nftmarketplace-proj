import '../styles/globals.css'

import {NavBar, HeroSection , Footer, NFTCard} from '../components/componentsindex'

import {Category} from '../components/componentsindex'

const MyApp = ({ Component, pageProps })=> (
  <div>
    <NavBar/>
    <HeroSection />
    <Category />
    <NFTCard />
    <Footer />
  </div>
);


export default MyApp
