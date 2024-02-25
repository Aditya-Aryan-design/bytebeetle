"use client"
import { motion,useScroll } from "framer-motion"

const Card1 = () => {

  const {scrollYProgress} = useScroll()
  console.log(scrollYProgress);
  

  return (
    <motion.div
    
    initial={{ scale:0,y:50 }}
    whileInView={{ scale:1,y:0 }}
    
  
    className="border rounded-lg text-center p-2 w-52 h-44 flex items-center justify-center mx-auto my-2 overflow-hidden md:w-60 md:h-48 bg2">
      <p className="text-sm md:text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, amet.
        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum lorem lorem 
      </p>
    </motion.div>
  )
}

export default Card1
