"use client"
import { Vortex } from "react-loader-spinner"


const Loading = () => {
    return (
        <div className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center">
            <Vortex colors={["white", "fuchsia", "fuchsia", "white", "fuchsia", "white"]} />
        </div>
    )
}

export default Loading
