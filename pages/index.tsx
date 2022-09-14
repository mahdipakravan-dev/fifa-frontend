import type {NextPage} from 'next'
import {Layout} from "../components/layout";
import {usePopup} from "../libs/context/popup.hook";
import {POPUP_LOGIN, POPUP_REGISTER} from "../libs/context/popup.constants";

const Home: NextPage = () => {
    const {openPopup} = usePopup()

    return (
        <Layout className={"h-screen flex flex-col md:flex-row md:justify-center justify-between items-center p-6"}>
            <div className={"flex justify-center md:px-14"}>
                <img alt={"mbappe"} src={"/images/slider-1.png"} className={"object-contain object-center"}/>
            </div>
            <div>
                <span className={"text-4xl pt-4 font-bold"}>Dicover all about sport</span>
                <p className={"mt-4 text-slate-400"}>Search millions of jobs and get the inside scoop on companies.
                    Wait for what? Let’s get start it!</p>
                <div className={"flex between items-center mt-10 w-full"}>
                    <button className={"bg-blue-800 p-2 mr-2 w-full rounded"} onClick={() => openPopup({
                        popupName : POPUP_LOGIN
                    })}>Login</button>
                    <button onClick={() => openPopup({
                        popupName : POPUP_REGISTER
                    })} className={"p-2 mr-2 w-full"}>SignUp</button>
                </div>
            </div>
        </Layout>
    )
}

export default Home
