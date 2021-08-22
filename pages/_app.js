import '../styles/globals.css';
import '../styles/custom-global.css';
import Darkmode from 'darkmode-js';

function MyApp({ Component, pageProps }) {
  const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }

  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  return <Component {...pageProps} />
}

export default MyApp
