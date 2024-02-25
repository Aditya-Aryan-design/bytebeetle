"use client"
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import { memo } from "react";



const BeetleCanvas = () => {

    
    return (
        

        <Canvas>
            <Suspense fallback={null}>
                <directionalLight position={[-10,0,-10]} color="fuchsia"/>
                <Scene />
            </Suspense>
        </Canvas>
    
  )
}

const Scene = memo(()=>{

    return(
        <mesh>
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} autoRotate={true} rotateSpeed={2}/>
        <sphereGeometry args={[3,32,32]}/>
        <meshStandardMaterial
        />
      </mesh>
    )
})

export default memo(BeetleCanvas)
