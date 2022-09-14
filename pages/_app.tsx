import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'reactjs-popup/dist/index.css';
import {PopupContext} from "../libs/context/popup-context";
import {PopupConsumer} from "../libs/context/popup-consumer";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [bool , setBool] = useState(false);
  return (
      <PopupContext.Provider value={{bool,setBool : () => setBool(prev => !prev)}}>
        <PopupConsumer/>
        <Component {...pageProps} />
      </PopupContext.Provider>
  )
}

export default MyApp
