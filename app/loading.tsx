"use client"
import { Vortex } from "react-loader-spinner"


const Loading = () => {
    return (
        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center">
            <Vortex colors={["white", "skyblue", "white", "white", "skyblue", "white"]} />
        </div>
    )
}

export default Loading
