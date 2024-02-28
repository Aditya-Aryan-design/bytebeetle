"use client"
import { Vortex } from "react-loader-spinner"
import { memo } from "react"


const Loading = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Vortex colors={["blue", "blue", "blue", "blue", "blue", "blue"]} />
        </div>
    )
}

export default memo(Loading)
