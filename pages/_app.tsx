import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'reactjs-popup/dist/index.css';
import {PopupConsumer, PopupContext} from "../libs/context/popup.context";
import {useState} from "react";
import {OpenPopupOptions, PopupType} from "../libs/context/popup.type";
import {options} from "tsconfig-paths/lib/options";

function MyApp({ Component, pageProps }: AppProps) {
  const [popupOptions , setPopupOptions] = useState<OpenPopupOptions>({});

  const openPopup = (options : OpenPopupOptions) => setPopupOptions(prev => ({...prev, ...options}))

  return (
      <PopupContext.Provider value={{
          ...popupOptions,
          openPopup,
          closeAllPopup : () => openPopup({popupName : undefined, popupData : undefined})
      }}>
        <PopupConsumer/>
        <Component {...pageProps} />
      </PopupContext.Provider>
  )
}

export default MyApp
