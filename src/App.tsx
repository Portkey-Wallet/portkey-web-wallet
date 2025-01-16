import './App.css';
import WebWalletProvider from './provider/WebWalletProvider';
import PortkeyProvider from './provider/Portkey';
import Home from './pages/Home';
import '../polyfill';

function App() {
  return (
    <WebWalletProvider>
      <PortkeyProvider>
        <Home />
      </PortkeyProvider>
    </WebWalletProvider>
  );
}

export default App;
