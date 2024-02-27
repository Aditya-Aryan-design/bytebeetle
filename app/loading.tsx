"use client"
import { Vortex } from "react-loader-spinner"
import { memo } from "react"


const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Vortex colors={["teal", "teal", "teal", "teal", "teal", "teal"]} />
        </div>
    )
}

export default memo(Loading)
