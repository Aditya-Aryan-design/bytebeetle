"use client"
import { BsWhatsapp } from "react-icons/bs";
import { motion } from "framer-motion";
import { ownerContact } from "@/data/ContactData";

const {whatsapp} = ownerContact;

const CallButton = () => {
  return (
    <a href={whatsapp} target="_blank"><motion.div
        animate={{scale:[1, 1.2]}}
        transition={{
            duration:0.5,
            repeat:Infinity,
            repeatType:"mirror"
        }}


    className="absolute bottom-3 right-9 bg-green-500 text-white z-50 text-[5vmin] sm:text-[3vmin] p-[3vmin] sm:p-[2vmin] rounded-full shadow-md">
      <BsWhatsapp />
    </motion.div></a>
  )
}

export default CallButton
