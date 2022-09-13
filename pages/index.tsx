import type {NextPage} from 'next'
import Image from "next/image"
import {Layout} from "../components/layout";

const Home: NextPage = () => {
    return (
        <Layout className={"h-screen flex flex-col md:flex-row md:justify-center justify-between items-center p-6"}>
            <div className={"flex justify-center md:px-14"}>
                <img alt={"mbappe"} src={"/images/slider-1.png"} className={"object-contain object-center"}/>
            </div>
            <div>
                <span className={"text-4xl pt-4 font-bold"}>Dicover all about sport</span>
                <p className={"mt-2"}>Search millions of jobs and get the inside scoop on companies.
                    Wait for what? Let’s get start it!</p>
                <div className={"flex between items-center mt-10 w-full"}>
                    <button className={"bg-blue-800 p-2 mr-2 w-full rounded"}>Login</button>
                    <button className={"p-2 mr-2 w-full"}>SignUp</button>
                </div>
            </div>
        </Layout>
    )
}

export default Home
