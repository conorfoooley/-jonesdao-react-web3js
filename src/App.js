import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import {AppContextProvider} from './Context/AppContext';
import Landing from "./pages/Landing";
import Staking from "./pages/Staking";
import Aura from "./pages/Aura";
import GLP from "./pages/GLP";
import USDC from "./pages/USDC";
import DpxEth from "./pages/DpxEth";
import RDpxEth from "./pages/RDpxEth";
import Footer from "./components/Footer";
import DpxVault from "./pages/DpxVault";
import RDpxVault from "./pages/RDpxVault";
import EthVault from "./pages/EthVault";
import GOHMVault from "./pages/GohmVault";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Fragment>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/staking" element={<Staking />} />
            <Route path="/vaults/aura" element={<Aura />} />
            <Route path="/vaults/leveraged/glp" element={<GLP />} />
            <Route path="/vaults/leveraged/usdc" element={<USDC />} />
            <Route path="/vaults/metavaults/DPX-ETH" element={<DpxEth />} />
            <Route path="/vaults/metavaults/RDPX-ETH" element={<RDpxEth />} />
            <Route path="/vaults/options/DPX" element={<DpxVault />} />
            <Route path="/vaults/options/RDPX" element={<RDpxVault />} />
            <Route path="/vaults/options/ETH" element={<EthVault />} />
            <Route path="/vaults/options/GOHM" element={<GOHMVault />} />
          </Routes>
          <Footer/>
        </Fragment>
      </Router>
    </AppContextProvider>
    
  );
}

export default App;
