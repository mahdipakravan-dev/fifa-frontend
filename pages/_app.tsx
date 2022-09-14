import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'reactjs-popup/dist/index.css';
import {PopupContext} from "../libs/context/popup-context";
import {PopupConsumer} from "../libs/context/popup-consumer";
import {useState} from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const [popupName , setPopupName] = useState("");
  const [popupData , setPopUpData] = useState();

  const openPopup = (popupName : string , popUpData : any ) => {
      setPopupName(popupName)
      setPopUpData(popUpData)
    }

  return (
      <PopupContext.Provider value={{
          popupName,
          popupData,
          openPopup,
          closeAllPopup : () => {
              setPopupName("")
              setPopUpData(undefined)
          }
      }}>
        <PopupConsumer/>
        <Component {...pageProps} />
      </PopupContext.Provider>
  )
}

export default MyApp
