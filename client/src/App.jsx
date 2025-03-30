import AppRoute from './Routes';
import { ParallaxProvider } from 'react-scroll-parallax';
import "./App.css"

function App () {
  return (
    <>
      <ParallaxProvider>
      <AppRoute />
      </ParallaxProvider>
    </>
  );
}

export default App;